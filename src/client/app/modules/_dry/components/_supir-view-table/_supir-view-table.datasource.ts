import {MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import {Supir} from '../../interfaces/supir.interface';

import { DatabaseService } from '../../services/database.service';

export class SupirTableDataSource extends DataSource<Supir> {
	 _filterChange = new BehaviorSubject('');
	get filter(): string { return this._filterChange.value; }
	set filter(filter: string) { this._filterChange.next(filter); }
	constructor(
		private _supirDatabase: DatabaseService,
		private _paginator: MatPaginator
		,private _sort: MatSort
	) {
		super();
	}

	connect(): Observable<Supir[]> {
		const displayDataChanges = [
			this._paginator.page,
			this._sort.sortChange,
			this._supirDatabase.dataChange,
			this._filterChange
		];
		return Observable.merge(...displayDataChanges).map(() => {
			const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
			return this.getSortedData()
				.splice(startIndex, this._paginator.pageSize)
				.filter((Supir: Supir) => {
					let searchStr = (JSON.stringify(Supir)).toLowerCase();
					return searchStr.indexOf(this.filter.toLowerCase()) != -1;
				})
		});
	}
	disconnect() {
		// No-op
	}
	/** Returns a sorted copy of the database data. */
	getSortedData(): Supir[] {
		const data = this._supirDatabase.data.slice();
		if (!this._sort.active || this._sort.direction == '') { return data; }
		return data.sort((a, b) => {
			let propertyA: number|string = '';
			let propertyB: number|string = '';
			switch (this._sort.active) {
				case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
				case 'name': [propertyA, propertyB] = [a.nama, b.nama]; break;
				case 'noSIM': [propertyA, propertyB] = [a.noSIM, b.noSIM]; break;
				case 'noHP': [propertyA, propertyB] = [a.noHP, b.noHP]; break;
				case 'jk': [propertyA, propertyB] = [a.jk, b.jk]; break;
				case 'hargaSewa': [propertyA, propertyB] = [a.hargaSewa, b.hargaSewa]; break;
				case 'alamat': [propertyA, propertyB] = [a.alamat, b.alamat]; break;
				case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
				case 'image': [propertyA, propertyB] = [a.image, b.image]; break;
				case '_status': [propertyA, propertyB] = [a._status, b._status]; break;
				case '_disewa': [propertyA, propertyB] = [a._status, b._status]; break;
				case '_disewaSampai': [propertyA, propertyB] = [a._disewa, b._disewa]; break;
				case 'createdAt': [propertyA, propertyB] = [a.createdAt, b.createdAt]; break;
				case 'updatedAt': [propertyA, propertyB] = [a.updatedAt, b.updatedAt]; break;
			}
			let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
			let valueB = isNaN(+propertyB) ? propertyB : +propertyB;
			return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
		});
	}
}
