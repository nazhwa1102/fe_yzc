"use client";

import { sampleRepository } from "#/repository/sample";

const ListProduct = () => {
    const {data, isLoading, error}: any = sampleRepository.hooks.useProvince();
    console.log(error,"ada ga")
    return (
        <div>
            {!isLoading ? data.data.map((val:any)=> <div>{val.email}</div>): <div>...loading</div>}
        </div>
    )
    }
export default ListProduct