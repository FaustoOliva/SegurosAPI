import { getPolicies } from "../Utils/FetchData.js";

export class PoliciesService {

    getPolicieByClientName = async (nameC) => {
        console.log('This is a function on the service');
        const Policies = await getPolicies(nameC);
        return Policies;
    }
}