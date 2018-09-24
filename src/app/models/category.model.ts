export class CategoryModel {

    constructor(public name: string, public id: number, public slug?: string, Categories: Array<CategoryModel> = []) {

    }
}