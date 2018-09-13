export class CategoryModel {

    constructor(public name: string, public id: string, public slug?: string, Categories: Array<CategoryModel> = []) {

    }
}