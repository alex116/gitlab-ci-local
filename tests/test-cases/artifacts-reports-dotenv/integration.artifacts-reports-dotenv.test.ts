import {WriteStreamsMock} from "../../../src/write-streams-mock";
import {handler} from "../../../src/handler";
import {initSpawnSpy} from "../../mocks/utils.mock";
import {WhenStatics} from "../../mocks/when-statics";

beforeAll(() => {
    initSpawnSpy(WhenStatics.all);
});

test("artifacts-reports-dotenv <deploy-image> --needs", async () => {
    const writeStreams = new WriteStreamsMock();
    await handler({
        cwd: "tests/test-cases/artifacts-reports-dotenv",
        job: ["deploy-image"],
        needs: true,
    }, writeStreams);

});

test("artifacts-reports-dotenv <deploy-shell-iso> --needs", async () => {
    const writeStreams = new WriteStreamsMock();
    await handler({
        cwd: "tests/test-cases/artifacts-reports-dotenv",
        job: ["deploy-shell-iso"],
        needs: true,
        shellIsolation: true,
    }, writeStreams);

});

test("artifacts-reports-dotenv <deploy-shell-noiso> --needs", async () => {
    const writeStreams = new WriteStreamsMock();
    await handler({
        cwd: "tests/test-cases/artifacts-reports-dotenv",
        job: ["deploy-shell-noiso"],
        needs: true,
        shellIsolation: false,
    }, writeStreams);

});
