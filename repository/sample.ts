import {http} from "#/utils/http";
import useSWR from "swr";

const url = {
	getJoke() {
		return `/random_joke`
	},
	getProvince() {
		return'/api/users'
	}
}

const hooks = {
	useJoke() {
		return useSWR(url.getJoke(), http.fetcher)
	},
	useProvince() {
		return useSWR(url.getProvince(),http.fetcher)
	}
}

const api = {

}

export const sampleRepository = {
	url, hooks, api
}
