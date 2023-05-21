import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
    Sentry.init({
        dsn: "https://244e14c2a26b44c38cad63f344b29467@o382456.ingest.sentry.io/6049127",
        integrations: [new Integrations.BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}
function log(error) {
    Sentry.captureException(error);
}

const logger = {
    init,
    log,
};
export default logger;
