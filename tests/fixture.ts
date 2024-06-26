/**
Import Statements:
import { test as base } from '@playwright/test': This imports the test function from the @playwright/test module, renaming it to base. This function is likely used to define tests in Playwright.
import api from "../api/apiUtils": This imports api from the apiUtils module located in the relative path ../api/apiUtils.

Type Declaration:
type MyFixture: This defines a TypeScript type called MyFixture, which has a single property named API of type api.

Fixture Extension:
const fixtures = base.extend<MyFixture>({...}): This extends the base fixture (likely provided by Playwright) with custom functionality. It takes an object as an argument with properties corresponding to fixture names (API in this case) and their implementations.

Fixture Implementation:
API: async ({ request }, use) => { ... }: This is the implementation of the API fixture. It is an asynchronous function that takes an object { request } and a use function. Inside the function, it creates an instance of the api class with the provided request, then it awaits the use function with the created API instance as an argument. This essentially allows the test to use the API instance within its scope.

Export Statement:
export { fixtures }: This exports the fixtures object, presumably to be used elsewhere in your codebase.
**/

import { test as base } from '@playwright/test'
import  ApiUtils  from "../src/api/apiUtils.ts";


type MyFixture = {
  API: ApiUtils;
};

const fixtures = base.extend<MyFixture>({
    API: async ({ request }: any, use: (arg0: any) => any) => {
        const API = new ApiUtils(request);
        await use(API)
    }
})

export { fixtures }
