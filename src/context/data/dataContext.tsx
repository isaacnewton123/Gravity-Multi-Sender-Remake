import { useEffect, useState, type ReactNode } from "react";
import type { Data } from "./types";
import { DataContext } from "./useDataContext";

export const DataProvider = ({children} : {children : ReactNode}) => {
    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        console.log(data)
    }, [data])

    const value = {
        data,
        setData
    }

    return <DataContext value={value}>{children}</DataContext>
}