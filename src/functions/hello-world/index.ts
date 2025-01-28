import { AzureFunction, Context, HttpRequest } from "@azure/functions";

/**
 * HTTP trigger function that returns a "Hello World" message
 * @param context - Azure Functions context
 * @param req - HTTP request object
 * @returns HTTP response with greeting message
 */
const httpTrigger: AzureFunction = async (
    context: Context,
    req: HttpRequest
): Promise<void> => {
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
    } catch (error) {
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
};

export default httpTrigger; 