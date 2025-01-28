"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * HTTP trigger function that returns a "Hello World" message
 * @param context - Azure Functions context
 * @param req - HTTP request object
 * @returns HTTP response with greeting message
 */
const httpTrigger = (context, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        context.log("HTTP trigger function processed a request.");
        context.res = {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                message: "Hello World"
            }
        };
    }
    catch (error) {
        context.log.error("Error processing request:", error);
        context.res = {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                error: "Internal server error occurred"
            }
        };
    }
});
exports.default = httpTrigger;
//# sourceMappingURL=index.js.map