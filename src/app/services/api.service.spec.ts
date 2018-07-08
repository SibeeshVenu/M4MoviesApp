import { async, TestBed } from "@angular/core/testing";
import { Http } from "@angular/http";
import { ApiService } from "./api.service";
import { Observable, defer } from "rxjs";
import { AuthService } from "./auth.service";
import { HttpErrorResponse } from "@angular/common/http";

describe("Api Service Tests", () => {
    let service: ApiService;
    let http: { request: jasmine.Spy };
    let auth: AuthService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [Http, AuthService]
        });
        http = jasmine.createSpyObj("HttpClient", ['request']);

        service = new ApiService(<any>http, auth);
    }));

    it("Should return movies -  get api", async(() => {
        const expectedMovies = {
            title: "Test"
        };
        http.request.and.returnValue(new Observable<any>());
        service.get("").subscribe(movies => {
            expect(movies).toEqual(expectedMovies);
        });
        expect(http.request.calls.count()).toBe(1);
    }));

    it("Should call post api", async(() => {
        http.request.and.returnValue(new Observable<any>());
        service.post("", {}).subscribe(movies => {
            expect(http.request.calls.count()).toBe(1);
        });
    }));

    it("Should call delete api", async(() => {
        http.request.and.returnValue(new Observable<any>());
        service.delete("", {}).subscribe(movies => {
            expect(http.request.calls.count()).toBe(1);
        });
    }));

    it("Should call put api", async(() => {
        http.request.and.returnValue(new Observable<any>());
        service.put("", {}).subscribe(movies => {
            expect(http.request.calls.count()).toBe(1);
        });
    }));

    // it("Should return error", async(() => {
    //     const error = new HttpErrorResponse({
    //         status: 404,
    //         error: "Not found"
    //     });

    //     http.request.and.returnValue(asyncError(error));
    //     service.get("404").subscribe(
    //         movies => fail('expected an error'),
    //         error => {
    //             expect(error.message).toContain("Not found");
    //             console.log(error)
    //         }
    //     );
    // }));
});

export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}