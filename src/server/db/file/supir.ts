import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

declare var require: any;
declare var __dirname: any;

export interface Supir {
	id?: string;
	nama?: string;
	noSIM?: string;
	noHP?: string;
	jk?: string;
	hargaSewa?: string;
	alamat?: string;
	email?: string;
	image?: string;
	_status?: 'Tersedia' | 'Disewa';
	_disewa?: number;
	_disewaSampai?: string;
	createdAt?: string;
	updatedAt?: string;
}

const { writeFile } = require('fs');
const { join } = require('path');

let Supir$: Supir[];
try{
	Supir$ = require('./supir.json');
}catch(e){
	Supir$ = [];
}

function save(): void {
	console.log(Supir$)
	writeFile(join(__dirname, 'supir.json'), JSON.stringify(Supir$), 'utf8', (err) => {
		if (err) {throw new Error(err)}
		console.log('file saved !!!');
	});
}

export function gets(): Supir[] {
	console.log('[db]Supir: gets');
	return Supir$;
}
export function get(id: string): Supir {
	console.log('[db]Supir: get');
	return Supir$.filter((supir: Supir) => supir.id === id)[0];
}
export function add(supir: Supir) {
	Supir$.unshift(Object.assign(supir, {
		id: ((Math.random() * Math.random() * 1000).toString() + Date.now()).replace('.', '').replace('.', ''),
		_status: 'Tersedia',
		_disewa: 0,
		createdAt: Date.now(),
		updatedAt: Date.now()
	}));
	save();
}
export function update(supir: Supir): Supir {
	console.log('[db]Supir: update');
	Object.keys(Supir$).map((key)=>{
		if( Supir$[key].id == supir.id ){
			Object.assign(Supir$[key], Object.assign(supir, {
				updatedAt: Date.now()
			}))
		}
	})
	save();
	return supir;
}
export function remove(id: string): void {
	console.log('[db]Supir: remove');
	Supir$ = Supir$.filter((Supir: Supir) => {
		return id !== Supir.id;
	});
	save();
}
