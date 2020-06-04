<<<<<<< HEAD
webpackJsonp([10],{
=======
webpackJsonp([11],{
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = /** @class */ (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\aboutus\aboutus.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">About Us </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\aboutus\aboutus.html"*/,
=======
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\aboutus\aboutus.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">About Us </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\aboutus\aboutus.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_forum__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPage = /** @class */ (function () {
    function AddPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.details = [];
        this.category = "";
        this.question = "";
        this.desc = "";
        this.storage.set('status', 'true');
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
        this.storage.get('uname').then(function (val2) {
            _this.username = val2;
        });
        console.log(this.uid);
    }
    AddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPage');
    };
    AddPage.prototype.Submit = function () {
        if (this.category != "" && this.desc != "" && this.question != "") {
            var body = {
                username: this.username,
                question: this.question,
                date: new Date().toDateString(),
                questiontitle: this.question,
                userid: this.uid,
                description: this.desc,
                time: new Date().toTimeString(),
                qtype: this.category
            };
            this.http.post('http://localhost:3000/uploadquestion', body).subscribe(function (res) {
                console.log("success");
            });
            this.navCtrl.pop();
        }
    };
    AddPage.prototype.next1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forum_forum__["a" /* ForumPage */]);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\add\add.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2 id="signup">Add Query</h2>\n</div>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="question" placeholder="Question"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="text" [(ngModel)]="desc" placeholder="Description"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select placeholder="Select" [(ngModel)]="category">\n        <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <br>\n\n  <div style="text-align: center;">\n    <button ion-button (click)="Submit()">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\add\add.html"*/,
=======
            selector: 'page-add',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\add\add.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2 id="signup">Add Query</h2>\n</div>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="question" placeholder="Question"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="text" [(ngModel)]="desc" placeholder="Description"></ion-input>\n    </ion-item>\n\n    <br>\n\n    <ion-item>\n      <ion-label>Select Category</ion-label>\n      <ion-select placeholder="Select" [(ngModel)]="category">\n        <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <br>\n\n  <div style="text-align: center;">\n    <button ion-button (click)="Submit()">Submit</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\add\add.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forum_forum__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.searchQuery = '';
        this.upvotes = 32;
        this.downvotes = 0;
        this.username = "";
        this.check1 = false;
        this.check = false;
        this.today = Date.now();
        this.d = new Date();
        this.answer = "";
        this.aname = "Aayush Saxena";
        this.atime = "19th Feb, 2019 16:34pm";
        this.value = navParams.get("detail");
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
        this.storage.get('uname').then(function (val1) {
            _this.username = val1;
        });
    }
    DetailsPage.prototype.submit = function () {
        var _this = this;
        if (this.answer != "") {
            var body = {
                questionid: this.value.questionid,
                date: new Date().toDateString(),
                userid: this.uid,
                answer: this.answer,
                time: new Date().toTimeString(),
                username: this.username
            };
            this.http.post('http://localhost:3000/answers', body).subscribe(function (res) {
                console.log("success");
            });
            this.http.post('http://localhost:3000/disanswers', body).subscribe(function (res) {
                _this.comments = res.json();
                console.log(_this.comments);
            }, function (err) {
                console.log("Server Down");
            });
        }
        this.answer = "";
        this.http.post('http://localhost:3000/inc_count', body).subscribe(function (res) {
        });
    };
    DetailsPage.prototype.Delete = function (i) {
        var body = {
            answer: this.comments[i].answers,
            questionid: this.comments[i].questionid
        };
        this.http.post('http://localhost:3000/delanswer', body).subscribe(function (res) {
        }, function (err) {
            console.log("Server Down");
        });
        this.http.post('http://localhost:3000/dec_count', body).subscribe(function (res) {
        });
        this.ionViewWillEnter();
    };
    DetailsPage.prototype.Answer = function () {
        this.check1 = !(this.check1);
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var body = {
            questionid: this.value.questionid
        };
        this.http.post('http://localhost:3000/disanswers', body).subscribe(function (res) {
            _this.comments = res.json();
            console.log(_this.comments);
        }, function (err) {
            console.log("Server Down");
        });
        var body1 = {
            userid: this.uid
        };
        this.http.post('http://localhost:3000/upvote', body1).subscribe(function (res) {
            _this.items = res.json();
            console.log(_this.items);
        }, function (err) {
            console.log("Server Down");
        });
    };
    DetailsPage.prototype.upvote = function (answerid) {
        var _this = this;
        var body = {
            userid: this.uid,
            answerid: answerid
        };
        this.http.post('http://localhost:3000/doupvote', body).subscribe(function (res) {
            if (res.json().status == 500) {
                var body = {
                    userid: _this.uid,
                    answerid: answerid
                };
                _this.http.post('http://localhost:3000/delupvote', body).subscribe(function (res) {
                    console.log(res.json());
                    _this.xx = "0";
                });
            }
            else {
                _this.xx = "1";
            }
        });
        console.log(answerid, this.uid);
    };
    DetailsPage.prototype.next1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forum_forum__["a" /* ForumPage */]);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\details\details.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" type="submit" (click)="next1()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  \n    <ion-item class="deet">\n      <ion-avatar class="head" item-start>\n        <img src="assets/imgs/images.png">\n      </ion-avatar>\n      <h4>{{value.Name}}</h4>\n      <p>{{value.date}} {{value.time}}</p>\n    </ion-item>\n  </div>\n</ion-header>\n\n<ion-content class="master">\n\n<div></div>\n  <ion-card>\n    \n    <ion-card-content class="questions">\n      <div class="voter">\n        <button ion-button clear style="padding: 0; margin: 0; padding-right: 10px;" ><ion-icon name="arrow-round-up" id="upvote"></ion-icon></button>\n      </div>\n    <div class="question" style="display: inline-block; max-width: 348px;">\n      Q: {{value.question}}\n    </div>\n    <br/>\n    <div class="voter" style="color: rgb(24, 6, 90); padding-left: 1.5px;">\n      {{value.upvotes-value.downvotes}}\n    </div>\n    <br/>\n    <div class="voter">\n      <button ion-button clear style="padding: 0; margin: 0; padding-right: 10px;"><ion-icon name="arrow-round-down" id="upvote"></ion-icon></button>\n    </div>\n    <div class="description" style="display: inline-block;">\n       {{value.description}}\n    </div>\n  \n    </ion-card-content>\n  </ion-card>\n\n\n\n  <div style="text-align: center;">\n    <button ion-button clear (click)="Answer()" style="color:rgb(24, 6, 90);">\n      ANSWER\n    </button>\n\n\n    <ion-card *ngIf="check1">\n      <ion-item class="deets">\n\n          <ion-avatar item-start>\n            <img src="assets/imgs/images.png">\n          </ion-avatar>\n          <h2 style="color: rgb(24, 6, 90);font-weight: bold;">{{aname}}</h2>\n          <p style="color: rgb(24, 6, 90);">{{atime}}</p>\n        </ion-item>\n        \n        <br>\n\n        <ion-card-content>\n\n          <div class="description">\n            {{value.answer}}\n          </div>\n          <br>\n          <span>\n            <button ion-button clear class="vote" (click)="inc()">\n              <ion-icon name="arrow-round-up"></ion-icon>\n              &ensp;&ensp;{{upvotes - downvotes}}\n            </button>\n          </span>\n  \n          &ensp;\n  \n          <span>\n           <button ion-button clear class="vote" (click)="dec()">\n              <ion-icon name="arrow-round-down"></ion-icon>\n            </button>\n          </span>\n\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngFor="let comment of comments; let i = index">\n      <ion-card>\n        <ion-item class="deets">\n            <ion-avatar item-start>\n              <img src="assets/imgs/images.png">\n            </ion-avatar>\n            <h2 style="color: rgb(24, 6, 90);font-weight: bold;">{{comment.username}}</h2>\n            <p style="color: rgb(24, 6, 90);">{{comment.date}} {{comment.time}}</p>\n          </ion-item>\n          <br>\n          <ion-card-content>\n            <div class="description">\n              {{comment.answers}}\n            </div>\n  \n            <br><div *ngFor="let item of items"> \n            <span><div *ngIf="items.includes(comment.answerid) ; else notToday">\n              <button ion-button clear class="vote" (click)="upvote(comment.answerid)">\n                <ion-icon name="arrow-round-up"></ion-icon>\n                &ensp;&ensp;{{comment.upvotes - comment.downvotes+xx}}\n              </button>\n            </div>\n            <ng-template #notToday>kweHR;QOE</ng-template>\n         \n            </span>\n          </div>\n            &ensp;\n    \n            <span>\n             <button ion-button clear class="vote">\n                <ion-icon name="arrow-round-down"></ion-icon>\n              </button>\n            </span>\n  \n            <button ion-button clear class="delete" (click)="Delete(i)" *ngIf="uid==comment.userid">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n    \n\n\n    <ion-footer class="comment">\n        <ion-input type="text" placeholder="Add an Answer.." class="textbox" [(ngModel)]="answer"></ion-input>\n        <ion-fab right bottom>\n          <button ion-fab (click)="submit()"><ion-icon name="paper-plane"></ion-icon></button>\n        </ion-fab>\n    </ion-footer>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\details\details.html"*/,
=======
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\details\details.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" type="submit" (click)="next1()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  \n    <ion-item class="deet">\n      <ion-avatar class="head" item-start>\n        <img src="assets/imgs/images.png">\n      </ion-avatar>\n      <h4>{{value.Name}}</h4>\n      <p>{{value.date}} {{value.time}}</p>\n    </ion-item>\n  </div>\n</ion-header>\n\n<ion-content class="master">\n\n<div></div>\n  <ion-card>\n    \n    <ion-card-content class="questions">\n      <div class="voter">\n        <button ion-button clear style="padding: 0; margin: 0; padding-right: 10px;" ><ion-icon name="arrow-round-up" id="upvote"></ion-icon></button>\n      </div>\n    <div class="question" style="display: inline-block; max-width: 348px;">\n      Q: {{value.question}}\n    </div>\n    <br/>\n    <div class="voter" style="color: rgb(24, 6, 90); padding-left: 1.5px;">\n      {{value.upvotes-value.downvotes}}\n    </div>\n    <br/>\n    <div class="voter">\n      <button ion-button clear style="padding: 0; margin: 0; padding-right: 10px;"><ion-icon name="arrow-round-down" id="upvote"></ion-icon></button>\n    </div>\n    <div class="description" style="display: inline-block;">\n       {{value.description}}\n    </div>\n  \n    </ion-card-content>\n  </ion-card>\n\n\n\n  <div style="text-align: center;">\n    <button ion-button clear (click)="Answer()" style="color:rgb(24, 6, 90);">\n      ANSWER\n    </button>\n\n\n    <ion-card *ngIf="check1">\n      <ion-item class="deets">\n\n          <ion-avatar item-start>\n            <img src="assets/imgs/images.png">\n          </ion-avatar>\n          <h2 style="color: rgb(24, 6, 90);font-weight: bold;">{{aname}}</h2>\n          <p style="color: rgb(24, 6, 90);">{{atime}}</p>\n        </ion-item>\n        \n        <br>\n\n        <ion-card-content>\n\n          <div class="description">\n            {{value.answer}}\n          </div>\n          <br>\n          <span>\n            <button ion-button clear class="vote" (click)="inc()">\n              <ion-icon name="arrow-round-up"></ion-icon>\n              &ensp;&ensp;{{upvotes - downvotes}}\n            </button>\n          </span>\n  \n          &ensp;\n  \n          <span>\n           <button ion-button clear class="vote" (click)="dec()">\n              <ion-icon name="arrow-round-down"></ion-icon>\n            </button>\n          </span>\n\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngFor="let comment of comments; let i = index">\n      <ion-card>\n        <ion-item class="deets">\n            <ion-avatar item-start>\n              <img src="assets/imgs/images.png">\n            </ion-avatar>\n            <h2 style="color: white;">{{comment.username}}</h2>\n            <p style="color: wheat;">{{comment.date}} {{comment.time}}</p>\n          </ion-item>\n          <br>\n          <ion-card-content>\n            <div class="description">\n              {{comment.answers}}\n            </div>\n  \n            <br><div *ngFor="let item of items"> \n              <span><div *ngIf="items.includes(comment.answerid) == true">\n                <button ion-button clear class="vote" (click)="upvote(comment.answerid)">\n                  <ion-icon name="arrow-round-up"></ion-icon>\n                 \n                </button>\n                \n              </div>\n              &ensp;&ensp;{{comment.upvotes - comment.downvotes+xx}}\n              <div *ngIf="items.includes(comment.answerid) == false">\n                <button ion-button clear class="vote" (click)="upvote(comment.answerid)">\n                  <ion-icon name="arrow-round-up"></ion-icon>\n                 \n                </button>\n                \n              </div>\n           \n              </span>\n            </div>\n            &ensp;\n    \n            <!-- <span>\n             <button ion-button clear class="vote">\n                <ion-icon name="arrow-round-down"></ion-icon>\n              </button>\n            </span> -->\n  \n            <button ion-button clear class="delete" (click)="Delete(i)" *ngIf="uid==comment.userid">\n              <ion-icon name="md-trash"></ion-icon>\n            </button>\n          </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n    \n\n\n    <ion-footer class="comment">\n        <ion-input type="text" placeholder="Add an Answer.." class="textbox" [(ngModel)]="answer"></ion-input>\n        <ion-fab right bottom>\n          <button ion-fab (click)="submit()"><ion-icon name="paper-plane"></ion-icon></button>\n        </ion-fab>\n    </ion-footer>\n \n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\details\details.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventformPage = /** @class */ (function () {
    function EventformPage(navCtrl, navParams, storage, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.storage.get('id').then(function (val) {
            _this.id = val;
            console.log(_this.id);
            var body = {
                eventid: _this.id
            };
            _this.http.post('http://localhost:3000/showdescription', body).subscribe(function (response) {
                console.log(response.json());
                _this.events = response.json();
                console.log(_this.events);
            });
        });
    }
    EventformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventformPage');
    };
    EventformPage.prototype.next1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    EventformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-eventform',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\eventform\eventform.html"*/'\n<ion-content class="master" padding *ngFor="let event of events">\n  <ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2>{{event.venue}}</h2>\n</div>\n</ion-header>\n  \n  <img id="image" src="../assets/imgs/images.jfif" />\n  <h3>{{event.title}}</h3>\n  <h6>{{event.date}}</h6>\n  <div id="text">{{event.description}}</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\eventform\eventform.html"*/,
=======
            selector: 'page-eventform',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\eventform\eventform.html"*/'\n<ion-content class="master" padding *ngFor="let event of events">\n  <ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next1()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2>{{event.venue}}</h2>\n</div>\n</ion-header>\n  \n  <img id="image" src="../assets/imgs/images.jfif" />\n  <h3>{{event.title}}</h3>\n  <h6>{{event.date}}</h6>\n  <div id="text">{{event.description}}</div>\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\eventform\eventform.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], EventformPage);
    return EventformPage;
}());

//# sourceMappingURL=eventform.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Storage } from '@ionic/storage';




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.unpattern = "^(?=.*[A-Z])(?=.*[a-z]).{3,15}$";
        this.paspattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$";
        this.mobpattern = "^[0-9]{10}$";
        this.regpattern = "^[A-Z]{2}[0-9]{13}$";
        this.sup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)]],
            mobile: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(6000000000), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(9999999999), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.mobpattern)]],
            regno: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.regpattern)]],
            batch: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            course: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(this.unpattern)]],
            dept: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            year: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        }, {});
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.supForm = function () {
        console.log(this.sup.value);
    };
    SignupPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.store = function () {
        var userdata = {
            name: this.name,
            em: this.em,
            pas: this.pas,
            mob: this.mob,
            reg: this.reg,
            batch: this.batch,
            dept: this.dept,
            course: this.course,
<<<<<<< HEAD
            year: this.year
=======
            year: this.year,
            profpic: this.profpic
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        };
        this.http.post('http://localhost:3000/signup', userdata).subscribe(function (res) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
<<<<<<< HEAD
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\signup\signup.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2 id="signup">Signup</h2>\n</div>\n</ion-header>\n\n<ion-content class="master" padding>\n  \n  <ion-card style="border-radius: 8px; background: transparent;">\n  <form id="join" [formGroup]="sup" (ngSubmit)="supForm()">\n\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Username</h2>\n      </ion-label>\n      <ion-input id="name" name="name" [(ngModel)]="name" type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'required\') && sup.controls.username.touched">\n      <p>username is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'pattern\') && sup.controls.username.touched">\n      <p>Invalid Username</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Email</h2>\n      </ion-label>\n      <ion-input id="em" name="em" [(ngModel)]="em" type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'required\') && sup.controls.email.touched">\n      <p>email is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'email\') && sup.controls.email.touched">\n      <p> Invalid email</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Password</h2>\n      </ion-label>\n      <ion-input id="pas" name="pas" [(ngModel)]="pas" type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'required\') && sup.controls.password.touched">\n      <p>password is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'minlength\') && sup.controls.password.touched">\n      <p>Invalid password</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'pattern\') && sup.controls.password.touched">\n      <p>Password strength is low</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Mobile</h2>\n      </ion-label>\n      <ion-input id="mob" name="mob" [(ngModel)]="mob" type="string" formControlName="mobile"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'required\') && sup.controls.mobile.touched">\n      <p>mobile number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'pattern\') && sup.controls.mobile.touched">\n      <p>Invalid mobile number</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Registration Number</h2>\n      </ion-label>\n      <ion-input id="reg" name="reg" [(ngModel)]="reg" type="string" formControlName="regno"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf="sup.controls.regno.hasError(\'required\') && sup.controls.regno.touched">\n      <p>Registration number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.regno.hasError(\'pattern\') && sup.controls.regno.touched">\n      <p>Registration number is wrong</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Course</h2>\n      </ion-label>\n      <ion-input id="course" name="course" [(ngModel)]="course" type="text" formControlName="course"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'required\') && sup.controls.course.touched">\n      <p>Course is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'pattern\') && sup.controls.course.touched">\n      <p>Invalid Course</p>\n    </ion-item>\n\n    <br><br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Batch</h2>\n        </ion-label>\n        <ion-select name="batch" [(ngModel)]="batch" formControlName="batch">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n        </ion-select>\n      </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.batch.hasError(\'required\') && sup.controls.batch.touched">\n      <p>Batch is required</p>\n    </ion-item>\n    </ion-list>\n\n    <br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Department</h2>\n        </ion-label>\n        <ion-select name="dept" [(ngModel)]="dept" formControlName="dept">\n          <ion-option value="A1">A1</ion-option>\n          <ion-option value="B1">B1</ion-option>\n          <ion-option value="C1">C1</ion-option>\n          <ion-option value="A2">A2</ion-option>\n          <ion-option value="B2">B2</ion-option>\n          <ion-option value="C2">C2</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.dept.hasError(\'required\') && sup.controls.dept.touched">\n          <p>Department is required</p>\n        </ion-item>\n    </ion-list>\n\n<br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Year</h2>\n        </ion-label>\n        <ion-select name="year" [(ngModel)]="year" formControlName="year">\n          <ion-option value="1">1st</ion-option>\n          <ion-option value="2">2nd</ion-option>\n          <ion-option value="3">3rd</ion-option>\n          <ion-option value="4">4th</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.year.hasError(\'required\') && sup.controls.year.touched">\n          <p>year is required</p>\n        </ion-item>\n    </ion-list>\n      \n  </form>\n</ion-card>\n\n    <button ion-button type="submit" (click)="store()" [disabled]="!sup.valid">Register</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\signup\signup.html"*/,
=======
    SignupPage.prototype.uploadpic = function () {
        var body = {
            profpic: this.profpic
        };
        this.http.post('http://localhost:3000/uploadpic', body).subscribe(function (res) {
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\signup\signup.html"*/'<ion-header no-border>\n  <div id="heading">\n  <button id="menu" type="submit" (click)="next()">\n    <ion-icon name="arrow-back"></ion-icon>\n  </button>\n  <h2 id="signup">Signup</h2>\n</div>\n</ion-header>\n\n<ion-content class="master" padding>\n  \n  <ion-card style="border-radius: 8px; background: transparent;">\n  <form id="join" [formGroup]="sup" (ngSubmit)="supForm()">\n\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Username</h2>\n      </ion-label>\n      <ion-input id="name" name="name" [(ngModel)]="name" type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'required\') && sup.controls.username.touched">\n      <p>username is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.username.hasError(\'pattern\') && sup.controls.username.touched">\n      <p>Invalid Username</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Email</h2>\n      </ion-label>\n      <ion-input id="em" name="em" [(ngModel)]="em" type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'required\') && sup.controls.email.touched">\n      <p>email is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.email.hasError(\'email\') && sup.controls.email.touched">\n      <p> Invalid email</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Password</h2>\n      </ion-label>\n      <ion-input id="pas" name="pas" [(ngModel)]="pas" type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'required\') && sup.controls.password.touched">\n      <p>password is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'minlength\') && sup.controls.password.touched">\n      <p>Invalid password</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.password.hasError(\'pattern\') && sup.controls.password.touched">\n      <p>Password strength is low</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Mobile</h2>\n      </ion-label>\n      <ion-input id="mob" name="mob" [(ngModel)]="mob" type="string" formControlName="mobile"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'required\') && sup.controls.mobile.touched">\n      <p>mobile number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.mobile.hasError(\'pattern\') && sup.controls.mobile.touched">\n      <p>Invalid mobile number</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Registration Number</h2>\n      </ion-label>\n      <ion-input id="reg" name="reg" [(ngModel)]="reg" type="string" formControlName="regno"></ion-input>\n    </ion-item>\n    <ion-item  no-lines *ngIf="sup.controls.regno.hasError(\'required\') && sup.controls.regno.touched">\n      <p>Registration number is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.regno.hasError(\'pattern\') && sup.controls.regno.touched">\n      <p>Registration number is wrong</p>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label floating>\n        <h2>Course</h2>\n      </ion-label>\n      <ion-input id="course" name="course" [(ngModel)]="course" type="text" formControlName="course"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'required\') && sup.controls.course.touched">\n      <p>Course is required</p>\n    </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.course.hasError(\'pattern\') && sup.controls.course.touched">\n      <p>Invalid Course</p>\n    </ion-item>\n\n    <br><br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Batch</h2>\n        </ion-label>\n        <ion-select name="batch" [(ngModel)]="batch" formControlName="batch">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n        </ion-select>\n      </ion-item>\n    <ion-item no-lines *ngIf="sup.controls.batch.hasError(\'required\') && sup.controls.batch.touched">\n      <p>Batch is required</p>\n    </ion-item>\n    </ion-list>\n\n    <br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Department</h2>\n        </ion-label>\n        <ion-select name="dept" [(ngModel)]="dept" formControlName="dept">\n          <ion-option value="A1">A1</ion-option>\n          <ion-option value="B1">B1</ion-option>\n          <ion-option value="C1">C1</ion-option>\n          <ion-option value="A2">A2</ion-option>\n          <ion-option value="B2">B2</ion-option>\n          <ion-option value="C2">C2</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.dept.hasError(\'required\') && sup.controls.dept.touched">\n          <p>Department is required</p>\n        </ion-item>\n    </ion-list>\n\n<br>\n\n    <ion-list>\n      <ion-item no-lines>\n        <ion-label>\n          <h2>Year</h2>\n        </ion-label>\n        <ion-select name="year" [(ngModel)]="year" formControlName="year">\n          <ion-option value="1">1st</ion-option>\n          <ion-option value="2">2nd</ion-option>\n          <ion-option value="3">3rd</ion-option>\n          <ion-option value="4">4th</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="sup.controls.year.hasError(\'required\') && sup.controls.year.touched">\n          <p>year is required</p>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Picture</ion-label>\n          <ion-icon item-start md="md-image" class="text-primary"></ion-icon>\n          <ion-input type="file" [id]="pic" name="profpic"></ion-input>\n        </ion-item>\n    </ion-list>\n      \n  </form>\n</ion-card>\n\n    <button ion-button type="submit" (click)="store()" [disabled]="!sup.valid">Register</button>\n    <ion-item no-lines>\n      <ion-label>Picture</ion-label>\n      <ion-icon item-start md="md-image" class="text-primary"></ion-icon>\n      <ion-input type="file" [id]="pic" name="profpic"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" (click)="uploadpic()" >Register</button>\n   \n  </ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\signup\signup.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.next = function () {
        var _this = this;
        this.storage.get('userid').then(function (val) {
            _this.userid = val;
            var body = {
                userid: _this.userid,
                title: _this.title,
                feed: _this.feed
            };
            _this.http.post('http://localhost:3000/feedback', body).subscribe(function (res) {
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\feedback\feedback.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">Feedback </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n<form id="join">\n  <ion-item no-lines>\n  <ion-label floating><h2>Title</h2></ion-label>\n  <ion-input id="title" name="title" [(ngModel)]="title" type="text"></ion-input>\n</ion-item>\n<ion-item no-lines>\n  <ion-label floating><h2>Feedback</h2></ion-label>\n  <ion-textarea id="feed" name="feed" [(ngModel)]="feed" type="text"></ion-textarea>\n</ion-item>\n</form>\n<button class="next" ion-button type="submit" (click)="next()">Send</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\feedback\feedback.html"*/,
=======
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\feedback\feedback.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">Feedback </h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n<form id="join">\n  <ion-item no-lines>\n  <ion-label floating><h2>Title</h2></ion-label>\n  <ion-input id="title" name="title" [(ngModel)]="title" type="text"></ion-input>\n</ion-item>\n<ion-item no-lines>\n  <ion-label floating><h2>Feedback</h2></ion-label>\n  <ion-textarea id="feed" name="feed" [(ngModel)]="feed" type="text"></ion-textarea>\n</ion-item>\n</form>\n<button class="next" ion-button type="submit" (click)="next()">Send</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\feedback\feedback.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

<<<<<<< HEAD
/***/ 121:
=======
/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyprofilePage');
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\myprofile\myprofile.html"*/'<ion-header no-border>\n  <div id="top">\n    <button id="menu" menuToggle>\n      <ion-icon name="menu" id="menu"></ion-icon>\n    </button>\n\n    <h2 id="head">My Profile</h2>\n  </div>\n</ion-header>\n<ion-content class="master" padding>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 122:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
=======
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
<<<<<<< HEAD
		283,
		9
	],
	"../pages/add/add.module": [
		284,
		8
	],
	"../pages/details/details.module": [
		286,
		7
	],
	"../pages/eventform/eventform.module": [
		285,
		6
	],
	"../pages/events/events.module": [
		287,
		5
	],
	"../pages/feedback/feedback.module": [
		288,
		4
	],
	"../pages/forum/forum.module": [
		289,
		3
	],
	"../pages/interest/interest.module": [
		290,
		2
	],
	"../pages/newpage/newpage.module": [
		291,
		1
	],
	"../pages/signup/signup.module": [
		292,
=======
		284,
		10
	],
	"../pages/add/add.module": [
		285,
		9
	],
	"../pages/details/details.module": [
		286,
		8
	],
	"../pages/eventform/eventform.module": [
		287,
		7
	],
	"../pages/events/events.module": [
		288,
		6
	],
	"../pages/feedback/feedback.module": [
		289,
		5
	],
	"../pages/forum/forum.module": [
		290,
		4
	],
	"../pages/interest/interest.module": [
		291,
		3
	],
	"../pages/myprofile/myprofile.module": [
		292,
		2
	],
	"../pages/newpage/newpage.module": [
		293,
		1
	],
	"../pages/signup/signup.module": [
		294,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
<<<<<<< HEAD
webpackAsyncContext.id = 162;
=======
webpackAsyncContext.id = 163;
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 206:
=======
/***/ 207:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterestPage = /** @class */ (function () {
    function InterestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InterestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestPage');
    };
    InterestPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */]);
    };
    InterestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-interest',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\interest\interest.html"*/'\n<ion-content class="master" padding>\n    <h2>Choose Interests</h2>\n    <form id="join">\n  <ion-item>\n    <ion-label>Technical</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Fun</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Recruitment</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Social</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Seminar</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Workshop</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Enviornment</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n</form>\n  <button class="next" ion-button type="submit" (click)="next()">Save</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\interest\interest.html"*/,
=======
            selector: 'page-interest',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\interest\interest.html"*/'\n<ion-content class="master" padding>\n    <h2>Choose Interests</h2>\n    <form id="join">\n  <ion-item>\n    <ion-label>Technical</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Fun</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Recruitment</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Social</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Seminar</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Workshop</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Enviornment</ion-label>\n    <ion-checkbox></ion-checkbox>\n  </ion-item>\n</form>\n  <button class="next" ion-button type="submit" (click)="next()">Save</button>\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\interest\interest.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InterestPage);
    return InterestPage;
}());

//# sourceMappingURL=interest.js.map

/***/ }),

<<<<<<< HEAD
/***/ 207:
=======
/***/ 208:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewpagePage = /** @class */ (function () {
    function NewpagePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.http.get('http://jsonplaceholder.typicode.com/todos').subscribe(function (res) {
            _this.todos = res.json();
            console.log(_this.todos);
        });
    }
    NewpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewpagePage');
    };
    NewpagePage.prototype.add = function () {
        var body = { name: "hardik", value: "student" };
        this.http.post('/', body).subscribe(function (res) {
        });
    };
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-newpage',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\newpage\newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>newpage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card *ngFor="let todo of todos">\n  <p>{{todo.id}}</p>\n  <p>{{todo.title}}</p>\n  <p>{{todo.completed}}</p>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\newpage\newpage.html"*/,
=======
            selector: 'page-newpage',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\newpage\newpage.html"*/'<!--\n  Generated template for the NewpagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>newpage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card *ngFor="let todo of todos">\n  <p>{{todo.id}}</p>\n  <p>{{todo.title}}</p>\n  <p>{{todo.completed}}</p>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\newpage\newpage.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], NewpagePage);
    return NewpagePage;
}());

//# sourceMappingURL=newpage.js.map

/***/ }),

<<<<<<< HEAD
/***/ 208:
=======
/***/ 209:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 231:
=======
/***/ 232:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_events_events__ = __webpack_require__(32);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_interest_interest__ = __webpack_require__(206);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_interest_interest__ = __webpack_require__(207);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(19);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_details_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_add_add__ = __webpack_require__(108);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_details_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_add__ = __webpack_require__(108);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















<<<<<<< HEAD
=======

>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__["a" /* EventformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__["a" /* ForumPage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_add__["a" /* AddPage */]
=======
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__["a" /* MyprofilePage */]
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add/add.module#AddPageModule', name: 'AddPage', segment: 'add', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/eventform/eventform.module#EventformPageModule', name: 'EventformPage', segment: 'eventform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
=======
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eventform/eventform.module#EventformPageModule', name: 'EventformPage', segment: 'eventform', priority: 'low', defaultHistory: [] },
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forum/forum.module#ForumPageModule', name: 'ForumPage', segment: 'forum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interest/interest.module#InterestPageModule', name: 'InterestPage', segment: 'interest', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
=======
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
                        { loadChildren: '../pages/newpage/newpage.module#NewpagePageModule', name: 'NewpagePage', segment: 'newpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_interest_interest__["a" /* InterestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_eventform_eventform__["a" /* EventformPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_newpage_newpage__["a" /* NewpagePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_forum_forum__["a" /* ForumPage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_18__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_add_add__["a" /* AddPage */]
=======
                __WEBPACK_IMPORTED_MODULE_19__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_myprofile_myprofile__["a" /* MyprofilePage */]
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 282:
=======
/***/ 283:
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__ = __webpack_require__(43);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(113);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









<<<<<<< HEAD
=======

>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
//import { NewpagePage } from '../pages/newpage/newpage';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
<<<<<<< HEAD
=======
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__["a" /* MyprofilePage */] },
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */] },
            { title: 'Forum', component: __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__["a" /* ForumPage */] },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutusPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\app\app.html"*/'\n<ion-menu [content]="content" type="overlay">\n  <ion-header no-border>\n    <ion-toolbar color="secondary">\n      <ion-title style="margin: 5px;">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list >\n      <button color="secondary" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\app\app.html"*/'\n<ion-menu [content]="content" type="overlay">\n  <ion-header no-border>\n    <ion-toolbar color="secondary">\n      <ion-title style="margin: 5px;">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list >\n      <button color="secondary" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\app\app.html"*/
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventform_eventform__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, http, storage, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.socialSharing = socialSharing;
    }
    EventsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.selectedSegment = 'all';
        this.storage.get('status').then(function (val) {
            if (val == 'true') {
                _this.selectedSegment = 'all';
            }
            else {
                _this.selectedSegment = 'interest';
            }
        });
        this.storage.set('status', 'true');
        this.storage.get('token').then(function (val) {
            console.log(val);
            _this.as = val;
            console.log('token is ', _this.as);
            var body = {
                as: _this.as
            };
            _this.http.post('http://localhost:3000/disevents', body).subscribe(function (response) {
                _this.events = response.json();
                console.log(_this.events);
                //  console.log((response.json()))
                if (response.json().status == 500) {
                    alert("session expired");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    if (response.json() != null) {
                        _this.items = response.json();
                    }
                    else {
                        alert("failed");
                    }
                }
            });
        });
        this.storage.get('userid').then(function (val1) {
            _this.user = val1;
            var body = { userid: _this.user };
            _this.http.post('http://localhost:3000/fetchfavourites', body).subscribe(function (res) {
                console.log(res.json());
                _this.favs = res.json();
                console.log('value', _this.favs);
                if (res.json() != null) {
                    _this.items = res.json();
                }
                else {
                    alert("failed");
                }
            });
        });
    };
    EventsPage.prototype.ionViewDidLoad = function () {
        this.selectedSegment = 'all';
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.next1 = function (id) {
        this.storage.set('id', id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__eventform_eventform__["a" /* EventformPage */]);
    };
    EventsPage.prototype.next2 = function (eventid) {
        var body = {
            userid: this.user,
            eventid: eventid
        };
        this.http.post('http://localhost:3000/addfavourites', body).subscribe(function (res) {
            console.log('done');
        });
        this.ionViewWillEnter();
    };
    EventsPage.prototype.Delete = function (eventid) {
        var body = {
            userid: this.user,
            eventid: eventid
        };
        this.http.post('http://localhost:3000/delfavourites', body).subscribe(function (res) {
            console.log('done');
        });
        this.ionViewWillEnter();
    };
    EventsPage.prototype.all = function () {
        this.ionViewWillEnter();
        //console.log('current segment is ',this.selectedSegment)
    };
    EventsPage.prototype.share = function () {
        this.socialSharing.share('Message', 'Subject', 'http://www.ionicsync.com/images/logo.png', 'http://www.ionicsync.com').then(function () {
            console.log('Shared Successfully');
        }).catch(function () {
            console.log('Sharing Failed');
        });
    };
    ;
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\events\events.html"*/'<ion-header no-border>\n    <div id="top">\n      <button id="menu" menuToggle>\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n\n      <h2 id="head">Events </h2>\n    </div>\n    <ion-segment class="seg" [(ngModel)]="selectedSegment">\n      <ion-segment-button (click)="all()" class="tab" value="all" style="border-bottom-width:0px;color: white;">\n        All\n      </ion-segment-button>\n      <ion-segment-button (click)="favourites()" class="tab" value="favourites" style="border-bottom-width:0px ;color: white;">\n        Favourites\n      </ion-segment-button>\n      <ion-segment-button class="tab" value="interest" style="border-bottom-width:0px ;color: white;">\n        Interest\n      </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content class="master" padding>\n  <!-- [virtualScroll]="events" [approxItemHeight]="\'100px\'"  *virtualItem="let event"   -->\n  <div [ngSwitch]="selectedSegment">\n    <div>\n      <ion-list *ngSwitchCase="\'all\'" id="first">\n\n        <ion-card id="card" *ngFor="let event of events" >\n\n          <ion-card-header class="cardhead" (click)="next1(event.eventid)">\n            <button id="host">\n              <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n            </button>\n            <span id="name" name="date">{{event.venue}}</span><br>\n            {{event.date}}\n\n            <img src="../assets/imgs/images.jpg" class="photo" (click)="next1(event.eventid)" />\n          </ion-card-header>\n          <ion-card-content class="cardbody" (click)="next1(event.eventid)">\n\n            <ion-card-title name="title" id="title">\n              {{event.title}}\n            </ion-card-title>\n            <hr>\n            <p name="des" class="des" >{{event.description}}</p>\n\n          </ion-card-content>\n          <div>\n            <ion-grid id="grid">\n              <ion-row>\n                <ion-col>\n                        <button (click)="next2(event.eventid)" id="heart" ion-button icon-start clear small>\n                         <ion-icon style="font-size: xx-large; text-align: center;" name=\'heart-outline\'></ion-icon>\n                        </button>\n                </ion-col>\n\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon style="font-size: xx-large; text-align: center;" name="call"></ion-icon>\n                    <div></div>\n                  </button>\n                </ion-col>\n\n                <ion-col>\n                  <button (click)="share()" ion-button icon-start clear small>\n                    <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n                    <div></div>\n                  </button>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n\n  <div [ngSwitch]="selectedSegment">\n    <ion-list class="favo" *ngSwitchCase="\'favourites\'">\n\n      <ion-card *ngFor="let fav of favs">\n        <ion-card-header class="cardhead" (click)="next1(fav.eventid)">\n          <button id="host">\n            <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n          </button>\n          <span id="name" name="date">{{fav.venue}}</span><br>\n          {{fav.date}}\n          <img src="../assets/imgs/images.jpg" class="photo" (click)="next1(fav.eventid)" />\n        </ion-card-header>\n        <ion-card-content (click)="next1(fav.eventid)">\n          <ion-card-title name="title" id="title">\n            {{fav.title}}\n          </ion-card-title>\n          <hr>\n          <p name="des" class="des">\n            {{fav.description}}\n          </p>\n        </ion-card-content>\n        <ion-grid id="grid">\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small (click)="Delete(fav.eventid)">\n                <ion-icon style="font-size: xx-large; text-align: center;" name="heart-outline"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon style="font-size: xx-large; text-align: center;" name="call"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </div>\n\n  <div [ngSwitch]="selectedSegment">\n    <ion-list class="fav" *ngSwitchCase="\'interest\'">\n      <h2> Choose what to see </h2>\n      <form id="join">\n\n        <ion-item no-lines>\n          <ion-label>Technical</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Fun</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Recruitment</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Social</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Seminar</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Workshop</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Environment</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n\n      </form>\n\n      <div style="text-align: center;">\n        <button class="next" ion-button type="submit" (click)="next()">Save</button>\n      </div>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\events\events.html"*/,
=======
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\events\events.html"*/'<ion-header no-border>\n    <div id="top">\n      <button id="menu" menuToggle>\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n\n      <h2 id="head">Events </h2>\n    </div>\n    <ion-segment class="seg" [(ngModel)]="selectedSegment">\n      <ion-segment-button (click)="all()" class="tab" value="all" style="border-bottom-width:0px;color: white;">\n        All\n      </ion-segment-button>\n      <ion-segment-button (click)="favourites()" class="tab" value="favourites" style="border-bottom-width:0px ;color: white;">\n        Favourites\n      </ion-segment-button>\n      <ion-segment-button class="tab" value="interest" style="border-bottom-width:0px ;color: white;">\n        Interest\n      </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content class="master" padding>\n  <!-- [virtualScroll]="events" [approxItemHeight]="\'100px\'"  *virtualItem="let event"   -->\n  <div [ngSwitch]="selectedSegment">\n    <div>\n      <ion-list *ngSwitchCase="\'all\'" id="first">\n\n        <ion-card id="card" *ngFor="let event of events" >\n\n          <ion-card-header class="cardhead" (click)="next1(event.eventid)">\n            <button id="host">\n              <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n            </button>\n            <span id="name" name="date">{{event.venue}}</span><br>\n            {{event.date}}\n\n            <img src="../assets/imgs/images.jpg" class="photo" (click)="next1(event.eventid)" />\n          </ion-card-header>\n          <ion-card-content class="cardbody" (click)="next1(event.eventid)">\n\n            <ion-card-title name="title" id="title">\n              {{event.title}}\n            </ion-card-title>\n            <hr>\n            <p name="des" class="des" >{{event.description}}</p>\n\n          </ion-card-content>\n          <div>\n            <ion-grid id="grid">\n              <ion-row>\n                <ion-col>\n                        <button (click)="next2(event.eventid)" id="heart" ion-button icon-start clear small>\n                         <ion-icon style="font-size: xx-large; text-align: center;" name=\'heart-outline\'></ion-icon>\n                        </button>\n                </ion-col>\n\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon style="font-size: xx-large; text-align: center;" name="call"></ion-icon>\n                    <div></div>\n                  </button>\n                </ion-col>\n\n                <ion-col>\n                  <button (click)="share()" ion-button icon-start clear small>\n                    <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n                    <div></div>\n                  </button>\n                </ion-col>\n\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card>\n      </ion-list>\n    </div>\n  </div>\n\n  <div [ngSwitch]="selectedSegment">\n    <ion-list class="favo" *ngSwitchCase="\'favourites\'">\n\n      <ion-card *ngFor="let fav of favs">\n        <ion-card-header class="cardhead" (click)="next1(fav.eventid)">\n          <button id="host">\n            <ion-icon style="font-size: 50px;" name="contact"></ion-icon>\n          </button>\n          <span id="name" name="date">{{fav.venue}}</span><br>\n          {{fav.date}}\n          <img src="../assets/imgs/images.jpg" class="photo" (click)="next1(fav.eventid)" />\n        </ion-card-header>\n        <ion-card-content (click)="next1(fav.eventid)">\n          <ion-card-title name="title" id="title">\n            {{fav.title}}\n          </ion-card-title>\n          <hr>\n          <p name="des" class="des">\n            {{fav.description}}\n          </p>\n        </ion-card-content>\n        <ion-grid id="grid">\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small (click)="Delete(fav.eventid)">\n                <ion-icon style="font-size: xx-large; text-align: center;" name="heart-outline"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon style="font-size: xx-large; text-align: center;" name="call"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon style="font-size: xx-large; text-align: center;" name="share-alt"></ion-icon>\n                <div></div>\n              </button>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n  </div>\n\n  <div [ngSwitch]="selectedSegment">\n    <ion-list class="fav" *ngSwitchCase="\'interest\'">\n      <h2> Choose what to see </h2>\n      <form id="join">\n\n        <ion-item no-lines>\n          <ion-label>Technical</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Fun</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Recruitment</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Social</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Seminar</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Workshop</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-label>Environment</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n\n      </form>\n\n      <div style="text-align: center;">\n        <button class="next" ion-button type="submit" (click)="next()">Save</button>\n      </div>\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\events\events.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForumPage = /** @class */ (function () {
    function ForumPage(navCtrl, socialSharing, http, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.searchQuery = '';
        this.csearch = 0;
        this.category = "";
        this.cc = false;
        this.http.get('http://localhost:3000/disquestions').subscribe(function (res) {
            _this.details = res.json();
        }, function (err) {
            console.log("Server Down");
        });
        this.storage.set('status', 'true');
        this.storage.get('userid').then(function (val1) {
            _this.uid = val1;
        });
    }
    ForumPage.prototype.Share = function () {
        this.socialSharing.share("Hey! Check This Out!  ", "SRM Connect Forum Question", "", "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn");
    };
    ForumPage.prototype.Details = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], {
            detail: this.details[i]
        });
    };
    ForumPage.prototype.AddPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_add__["a" /* AddPage */]);
    };
    ForumPage.prototype.Search = function () {
        if (this.csearch == 0)
            this.csearch = 1;
        else
            this.csearch = 0;
    };
    ForumPage.prototype.Filter = function (category) {
        var _this = this;
        var body = {
            category: category
        };
        this.http.post('http://localhost:3000/filter', body).subscribe(function (res) {
            _this.details = res.json();
        });
    };
    ForumPage.prototype.onCancel = function () {
        var _this = this;
        this.http.get('http://localhost:3000/disquestions').subscribe(function (res) {
            _this.details = res.json();
        }, function (err) {
            console.log("Server Down");
        });
    };
    ForumPage.prototype.SearchString = function (term) {
        var _this = this;
        var body = {
            term: term
        };
        this.http.post('http://localhost:3000/search', body).subscribe(function (res) {
            _this.details = res.json();
        });
    };
    ForumPage.prototype.Delete = function (i) {
        var body = {
            questionid: this.details[i].questionid
        };
        this.http.post('http://localhost:3000/delquestion', body).subscribe(function (res) {
        }, function (err) {
            console.log("Server Down");
        });
        this.ionViewWillEnter();
    };
    ForumPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http.get('http://localhost:3000/disquestions').subscribe(function (res) {
            _this.details = res.json();
        }, function (err) {
            console.log("Server Down");
        });
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-forum',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\forum\forum.html"*/'<ion-header no-border>\n  <div id="top">\n      <button id="menu" menuToggle>\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <h2 id="head">Forum</h2>\n      <span id="nav"><button style="font-size: xx-large;" ion-button clear class="search" class="lnav" (click)="Search()"><ion-icon name="search"></ion-icon></button>\n      <button style="font-size: xx-large;" ion-button clear class="search">\n        \n        <ion-select selectedText=" " cancelText="Clear" #C (ionChange)="Filter(C.value)" (ionCancel)="onCancel()">\n          <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n        </ion-select>\n\n      <ion-icon class="lnav"  name="ios-funnel-outline"></ion-icon></button></span></div>\n    <ion-item *ngIf="csearch" style="background-color: transparent;">\n    <ion-searchbar #S (ionChange)="SearchString(S.value)"></ion-searchbar> \n  </ion-item>\n</ion-header>\n\n<br>\n<br>\n<br>\n\n<ion-content class="master">\n\n<div *ngFor="let detail of details; let i= index">\n  \n<ion-card>\n\n  <ion-item class="deets" (click)="Details(i)">\n  \n    <ion-avatar item-start>\n        <img src="assets/imgs/images.png">\n    </ion-avatar>\n\n    <h2 style="color: white;">{{detail.Name}}</h2>\n\n    <p style="color: wheat;">{{detail.date}} &nbsp; {{detail.time}}</p>\n\n  </ion-item>\n\n  <br>\n\n    <ion-card-content>\n      <div class="question-type" (click)="Details(i)">\n        {{detail.qtype}}\n      </div>\n      \n      <div class="question" (click)="Details(i)">\n        Q: {{detail.question}}\n      </div>\n\n      <div class="sh-ans" (click)="Details(i)">\n        {{detail.description}}\n      </div>\n\n\n      <div style="text-align: center; ">\n\n        <span>\n          <button ion-button clear class="vote">\n            <ion-icon name="arrow-round-up"></ion-icon>\n            &ensp;&ensp;{{detail.upvotes - detail.downvotes}}\n          </button>\n      </span>\n\n      &ensp;\n\n      <span>\n        <button ion-button clear class="vote">\n          <ion-icon name="arrow-round-down"></ion-icon>\n        </button>\n      </span>\n\n        <button ion-button clear class="share" (click)="Share()">\n          <ion-icon name="share"></ion-icon>\n        </button> \n\n        <div class="edits">\n          {{detail.comments}}\n          <ion-icon name="md-create"></ion-icon>\n        </div>\n        \n        <button ion-button clear class="delete" (click)="Delete(i)" *ngIf="uid==detail.userid">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </div>\n    </ion-card-content>\n</ion-card>\n</div>\n\n<ion-fab right bottom>\n  <button ion-fab (click)="AddPage()"><ion-icon name="add-outline" id="addbutton"></ion-icon></button>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\forum\forum.html"*/,
=======
            selector: 'page-forum',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\forum\forum.html"*/'<ion-header no-border>\n  <div id="top">\n      <button id="menu" menuToggle>\n        <ion-icon name="menu" id="menu"></ion-icon>\n      </button>\n      <h2 id="head">Forum</h2>\n      <span id="nav"><button style="font-size: xx-large;" ion-button clear class="search" class="lnav" (click)="Search()"><ion-icon name="search"></ion-icon></button>\n      <button style="font-size: xx-large;" ion-button clear class="search">\n        \n        <ion-select selectedText=" " cancelText="Clear" #C (ionChange)="Filter(C.value)" (ionCancel)="onCancel()">\n          <ion-option value="College Life">College Life</ion-option>\n          <ion-option value="Discussion">Discussion</ion-option>\n          <ion-option value="Technical">Technical</ion-option>\n          <ion-option value="Placement">Placement</ion-option>\n          <ion-option value="Confessions">Confessions</ion-option>\n          <ion-option value="Education">Education</ion-option>\n          <ion-option value="Movies">Movies</ion-option>\n          <ion-option value="Fun">Fun</ion-option>\n          <ion-option value="Other">Other</ion-option>\n        </ion-select>\n\n      <ion-icon class="lnav"  name="ios-funnel-outline"></ion-icon></button></span></div>\n    <ion-item *ngIf="csearch" style="background-color: transparent;">\n    <ion-searchbar #S (ionChange)="SearchString(S.value)"></ion-searchbar> \n  </ion-item>\n</ion-header>\n\n<br>\n<br>\n<br>\n\n<ion-content class="master">\n\n<div *ngFor="let detail of details; let i= index">\n  \n<ion-card>\n\n  <ion-item class="deets" (click)="Details(i)">\n  \n    <ion-avatar item-start>\n        <img src="assets/imgs/images.png">\n    </ion-avatar>\n\n    <h2 style="color: white;">{{detail.Name}}</h2>\n\n    <p style="color: wheat;">{{detail.date}} &nbsp; {{detail.time}}</p>\n\n  </ion-item>\n\n  <br>\n\n    <ion-card-content>\n      <div class="question-type" (click)="Details(i)">\n        {{detail.qtype}}\n      </div>\n      \n      <div class="question" (click)="Details(i)">\n        Q: {{detail.question}}\n      </div>\n\n      <div class="sh-ans" (click)="Details(i)">\n        {{detail.description}}\n      </div>\n\n\n      <div style="text-align: center; ">\n\n        <span>\n          <button ion-button clear class="vote">\n            <ion-icon name="arrow-round-up"></ion-icon>\n            &ensp;&ensp;{{detail.upvotes - detail.downvotes}}\n          </button>\n      </span>\n\n      &ensp;\n\n      <span>\n        <button ion-button clear class="vote">\n          <ion-icon name="arrow-round-down"></ion-icon>\n        </button>\n      </span>\n\n        <button ion-button clear class="share" (click)="Share()">\n          <ion-icon name="share"></ion-icon>\n        </button> \n\n        <div class="edits">\n          {{detail.comments}}\n          <ion-icon name="md-create"></ion-icon>\n        </div>\n        \n        <button ion-button clear class="delete" (click)="Delete(i)" *ngIf="uid==detail.userid">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </div>\n    </ion-card-content>\n</ion-card>\n</div>\n\n<ion-fab right bottom>\n  <button ion-fab (click)="AddPage()"><ion-icon name="add-outline" id="addbutton"></ion-icon></button>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\forum\forum.html"*/,
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, formBuilder, navParams, http, storage) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.log = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
        }, {});
    }
    HomePage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.next1 = function () {
        var _this = this;
        var body = {
            name1: this.name1,
            pas1: this.pas1
        };
        this.http.post('http://localhost:3000/passcheck', body).subscribe(function (response) {
            console.log(response.json());
            if (response.json().status == 400) {
                alert("Password incorrect");
            }
            else {
                _this.token = response.json().token;
                _this.userid = response.json().result;
                console.log("your id : ", _this.userid);
                console.log("your id : ", _this.name1);
                console.log(_this.token);
                _this.storage.set('token', _this.token);
                _this.storage.set('userid', _this.userid);
                _this.storage.set('uname', _this.name1);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */]);
                //this.storage.set('status','true');
            }
        });
    };
    HomePage.prototype.logForm = function () {
        console.log(this.log.value);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\home\home.html"*/'\n<link href=\'https://fonts.googleapis.com/css?family=Share Tech\' rel=\'stylesheet\'>\n<ion-content class="master" padding>\n  <p id=\'head\' ><b>SRM Connect</b></p>\n \n  <img id="image" src="../assets/imgs/social2.png" />\n  <div>\n  <h3 style="font-family: \'Share Tech\';">  Login</h3>\n  <form id="join" [formGroup]="log" (ngSubmit)="logForm()">\n\n    <ion-item no-lines>\n      <ion-label floating><h2>Username</h2></ion-label>\n      <ion-input  [(ngModel)]="name1" type="text" formControlName="username" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.username.hasError(\'required\') && log.controls.username.touched">\n      <p>Username Required</p>\n    </ion-item>\n    \n\n    <ion-item no-lines style="padding-bottom: 10px;">\n      <ion-label floating><h2>Password</h2></ion-label>\n      <ion-input [(ngModel)]="pas1" type="password" formControlName="password" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.password.hasError(\'required\') && log.controls.password.touched">\n      <p>Password Required</p>\n    </ion-item>\n        \n  </form>\n\n  <button ion-button type="submit" (click)="next1()"  [disabled]="!log.valid">Login</button>\n  <hr>\n  <br>\n  \n  <p>Logging in for the first time?</p>\n    <button ion-button type="submit" (click)="next()" >Sign up</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Admin\Desktop\SRM-Connect-master1\SRM-Connect-master\src\pages\home\home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\home\home.html"*/'\n<link href=\'https://fonts.googleapis.com/css?family=Share Tech\' rel=\'stylesheet\'>\n<ion-content class="master" padding>\n  <p id=\'head\' ><b>SRM Connect</b></p>\n \n  <img id="image" src="../assets/imgs/social2.png" />\n  <div>\n  <h3 style="font-family: \'Share Tech\';">  Login</h3>\n  <form id="join" [formGroup]="log" (ngSubmit)="logForm()">\n\n    <ion-item no-lines>\n      <ion-label floating><h2>Username</h2></ion-label>\n      <ion-input  [(ngModel)]="name1" type="text" formControlName="username" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.username.hasError(\'required\') && log.controls.username.touched">\n      <p>Username Required</p>\n    </ion-item>\n    \n\n    <ion-item no-lines style="padding-bottom: 10px;">\n      <ion-label floating><h2>Password</h2></ion-label>\n      <ion-input [(ngModel)]="pas1" type="password" formControlName="password" no-lines></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf="log.controls.password.hasError(\'required\') && log.controls.password.touched">\n      <p>Password Required</p>\n    </ion-item>\n        \n  </form>\n\n  <button ion-button type="submit" (click)="next1()"  [disabled]="!log.valid">Login</button>\n  <hr>\n  <br>\n  \n  <p>Logging in for the first time?</p>\n    <button ion-button type="submit" (click)="next()" >Sign up</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\HP\Desktop\srm-connect1-origin\srm-connect1-origin\src\pages\home\home.html"*/
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

<<<<<<< HEAD
},[208]);
=======
},[209]);
>>>>>>> fe56713674b266d86907f64b02ceb180428104cc
//# sourceMappingURL=main.js.map