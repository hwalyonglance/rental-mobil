import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

declare var require: any;
declare var __dirname: any;

export interface User {
	id?: string;
	nama?: string;
	noKTP?: string;
	noHP?: string;
	jk?: string;
	email?: string;
	alamat?: string;
	image?: string;
	createdAt?: string;
	updatedAt?: string;
}

const { writeFile } = require('fs');
const { join } = require('path');

let User$: User[];
try{
	User$ = require('./User.json');
}catch(e){
	User$ = [];
}

function save(): void {
	writeFile(join(__dirname, 'user.json'), JSON.stringify(User$), 'utf8', (err) => {
		if (err) {throw new Error(err)}
		console.log('file saved !!!');
	});
}

export function gets(): User[] {
	console.log('[db]User: gets');
	return User$;
}
export function get(id: string): User {
	console.log('[db]User: get');
	return User$.filter((User: User) => User.id === id)[0];
}
export function add(User: User): void {
	console.log('[db]User: add');
	User$.unshift(Object.assign(User, {
		createdAt: Date.now(),
	}));
	save();
}
export function update(User: User): void {
	console.log('[db]User: update');
	Object.keys(User$).map((key)=>{
		if( User$[key].id == User.id ){
			Object.assign(User$[key], Object.assign(User, {
				updatedAt: Date.now()
			}))
		}
	})
	save();
}
export function remove(id: string): void {
	console.log('[db]User: remove');
	User$ = User$.filter((User: User) => {
		return id !== User.id;
	});
	save();
}