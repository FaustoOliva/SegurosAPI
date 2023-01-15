import { getPolicies } from "../Utils/FetchData.js";

export class PoliciesService {

    getPolicieByClientName = async (nameC) => {
        console.log('This is a function on the service');
        console.log(nameC)
        const Policies = getPolicies(nameC);
        return Policies;
    }
}