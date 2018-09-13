import { Injectable } from '@angular/core';
import { AjaxService } from '../ajax/ajax.service';
import { CategoryModel } from '../../models/category.model';

@Injectable()
export class CategoryService {

    constructor(private _ajaxService: AjaxService) {

    }

    /**
     * get all root categories
     */
    public getRootCategories(): Promise<CategoryModel[]> {
        return new Promise((resolve, reject) => {
            this._ajaxService.Post({
                apiName: 'getRootCategories.php',
            }).then(ajaxresponse => {
                if (ajaxresponse.status) {
                    let rootCatArray: CategoryModel[] = this.parseCategories(ajaxresponse.data);
                    resolve(rootCatArray);
                }
                else {
                    reject(ajaxresponse.msg);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    /**
     * Get all sub categories of a catgory
     * @param categoryId Id of the parent category
     * @param fromIndex (Optional) (Default : 0) Index number from witch you want to get categories
     * @param count (Optional) (Default : 10) Numbers of categories 
     */
    public getSubCategoriesById(categoryId: number, fromIndex: number = 0, count: number = 10): Promise<CategoryModel[]> {
        return new Promise((resolve, reject) => {
            this._ajaxService.Post({
                apiName: 'getsubCategories.php',
                dataToSend: {
                    catId: categoryId,
                    start: fromIndex,
                    count: count
                }
            }).then(ajaxresponse => {
                if (ajaxresponse.status) {
                    let rootCatArray: CategoryModel[] = this.parseCategories(ajaxresponse.data);
                    resolve(rootCatArray);
                }
                else {
                    reject(ajaxresponse.msg);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }


    private parseCategories(catArr: any[]): CategoryModel[] {
        let catModelArr: CategoryModel[] = [];
        if (catArr && catArr.length > 0) {
            catArr.forEach((cat) => {
                // if (cat.status) {
                    catModelArr.push(new CategoryModel(cat.name, cat.id));
                // }
            })
        }
        return catModelArr;
    }
}