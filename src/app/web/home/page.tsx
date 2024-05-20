"use client"

import Button from "@/components/button/Button";
import { decrement, increment } from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

const HomePage = () => {

    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <h3>This is homePage count : {count}</h3>
            <Button type="button" click={() => dispatch(increment())} title="Increment" />
            <Button type="button" click={() => dispatch(decrement())} title="Decrement" />
        </>
    )
}

export default HomePage;