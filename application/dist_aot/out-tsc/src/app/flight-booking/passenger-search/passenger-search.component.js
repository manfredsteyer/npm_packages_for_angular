"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("app/shared/auth/auth.service");
var PassengerSearchComponent = (function () {
    function PassengerSearchComponent(authService) {
        this.authService = authService;
        this.userName = this.authService.userName;
    }
    return PassengerSearchComponent;
}());
PassengerSearchComponent = __decorate([
    core_1.Component({
        selector: 'passenger-search',
        template: "\n    <div class=\"row\">\n    <div class=\"card\">\n        <h1>Passenger Search</h1>\n      <div class=\"form-group\">\n        <label>Name:</label>\n        <input [(ngModel)]=\"userName\" class=\"form-control\">\n      </div>\n      <div>\n        This is just a dummy form ...\n      </div>\n    </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], PassengerSearchComponent);
exports.PassengerSearchComponent = PassengerSearchComponent;
//# sourceMappingURL=passenger-search.component.js.map