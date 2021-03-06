import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { _ContainerComponent } from '../_container/_container.component';
import { _NavComponent } from '../_nav/_nav.component';
import { _FileImageComponent } from '../../../_dry/components/_file-image/_file-image.component';

import { ConfigService } from '../../services/config.service';
import { Pp2MediaQueryService } from '../../../_dry/services/Pp2-media-query.service';

import { Supir } from '../../interfaces/supir.interface';

@Component({
	selector: "pp2-dry-supirForm",
	templateUrl: "_supir-form.component.html",
	styles: [``]
})
export class _SupirFormComponent implements AfterViewInit, OnDestroy, OnInit {
	@ViewChild('fi') C_Pp2_Dry_FI: _FileImageComponent;
	@ViewChild(_ContainerComponent) C_Pp2_Dry_Container: _ContainerComponent;

	type: string;
	label: string;
	disable: boolean = false;
	supirForm: FormGroup;
	cities: string[] = ["Bandung", "Cirebon", "Jakarta", "Padang"];
	constructor(
		private $_ngFormBuilder: FormBuilder,
		private $_ngHttpClient: HttpClient,
		private $_ngActivatedRoute: ActivatedRoute,
		private $_ngRouter: Router,
		public $_pp2Conf: ConfigService
	) {
		this.type = $_ngActivatedRoute.data['value']['type'];
		this.label = this.type === 'tambah' ? 'Tambah Supir' : 'Ubah Data Supir';
	}
	ngAfterViewInit() { }
	ngOnDestroy() {}
	ngOnInit() {
		const id = this.$_ngActivatedRoute.snapshot.params['id'];
		this.supirForm = this.$_ngFormBuilder.group({
			id: [''],
			nama: [''],
			noSIM: [''],
			jk: [''],
			noHP: [''],
			hargaSewa: [''],
			alamat: [''],
			email: [''],
			image: ['']
		});
		this.C_Pp2_Dry_FI.img.nativeElement.src = this.$_pp2Conf.baseUrl + '/uploads/supir/placeholder.png';
		if ( id ) {
			this.$_ngHttpClient.get<Supir>(this.$_pp2Conf.baseUrl + '/api/db/file/supir/get/' + id)
				.subscribe((supir: Supir) => {
					this.supirForm.setValue({
						id: supir.id,
						nama: supir.nama,
						noSIM: supir.noSIM,
						jk: supir.jk,
						noHP: supir.noHP,
						hargaSewa: supir.hargaSewa,
						alamat: supir.alamat,
						email: supir.email,
						image: supir.image
					})
					this.C_Pp2_Dry_FI.img.nativeElement.src = this.$_pp2Conf.baseUrl + '/uploads/supir/' + supir.image;
				})
		}
		this.disableForm();
		this.supirForm.valueChanges.subscribe(() => {
			this.disableForm();
		})
	}
	disableForm(): void {
		if (this.$_ngActivatedRoute.data['value']['type'] === 'ubah') {
			this.disable = false || !this.supirForm.valid;
		}
		if (this.$_ngActivatedRoute.data['value']['type'] === 'tambah') {
			try {
				if (this.C_Pp2_Dry_FI.i_file.files) {
					this.disable = false || !this.supirForm.valid;
				}
			} catch (e) {
				this.disable = true;
			}
		} else { this.disable = false || !this.supirForm.valid; }
	}
	tooltipMsg(): string {
		return this.disable ? 'Pilih Foto terlebih dahulu' : 'Simpan perubahan';
	}
	pp2OnSubmit(e: Event, val): void {
		e.preventDefault();
		const url = this.$_pp2Conf.baseUrl + '/api/db/file/supir/' + (this.$_ngActivatedRoute.data['value']['type'] === 'tambah' ? 'post' : 'put');
		this.C_Pp2_Dry_FI.save(url, val, this.$_ngActivatedRoute.data['value']['type'], ['pengurus', 'supir', 'lihat'])
	}
}
