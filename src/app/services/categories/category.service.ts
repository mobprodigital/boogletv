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
            }).catch(err => reject(err));
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
                    id: categoryId,
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

    public getAllCategories(): Promise<CategoryModel[]> {
        return new Promise((resolve, reject) => {
            let savedCategory = localStorage.getItem('jmm_allcategory');
            try {
                if (savedCategory) {
                    let allCats: CategoryModel[] = JSON.parse(savedCategory);
                    resolve(allCats);
                }
                else {
                    throw 'no saved categories found in local storage';
                }
            }
            catch {
                this._ajaxService.Post({
                    apiName: 'getAllCategories.php',
                }).then(ajaxresponse => {
                    if (ajaxresponse.status) {
                        let allCategory: CategoryModel[] = this.parseCategories(ajaxresponse.data);
                        localStorage.setItem('jmm_allcategory', JSON.stringify(allCategory));
                        resolve(allCategory);
                    }
                    else {
                        reject(ajaxresponse.msg);
                    }
                }).catch(err => {
                    reject(err);
                });
            }

        });
    }

    private parseCategories(catArr: any[]): CategoryModel[] {
        let catModelArr: CategoryModel[] = [];
        if (catArr && catArr.length > 0) {
            catArr.forEach((cat) => {
                // if (cat.status) {
                catModelArr.push(new CategoryModel(cat.name, parseInt(cat.id)));
                // }
            })
        }
        return catModelArr;
    }
}