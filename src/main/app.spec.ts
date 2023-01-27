import * as chai from "chai";
import superagent from "superagent";
import { config } from "../config/config";

describe("Status V1", () => {

    const port = process.env.PORT || config.port;

    it("Get /", async () => {
        return superagent.get(
            `http://127.0.0.1:${port}/`
        ).then(() => {
            chai.assert.fail("This call should fail")
        }).catch(error => {
            chai.expect(error.status).to.eql(404);
        });
    });

    it("Get /v1", async () => {
        return superagent.get(
            `http://127.0.0.1:${port}/v1`
        ).then(() => {
            chai.assert.fail("This call should fail")
        }).catch(error => {
            chai.expect(error.status).to.eql(404);
        });
    });

    it("Get /v1/status", async () => {
        const result = await superagent.get(
            `http://127.0.0.1:${port}/v1/status`
        );
        chai.expect(result.status).to.eql(200);
    });
});
