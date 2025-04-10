import React from 'react';
import {Carousel} from "antd";
import {Image} from "antd";
import MyList from "@components/MyList.jsx";

function App() {
    const onChange = currentSlide => {
        console.log(currentSlide);
    };
    return (
        <>
            <h1>ddd</h1>
            <MyList></MyList>
            <Carousel autoplay afterChange={onChange}>
                <div className={'w-fll h-[200px] p-3 bg-gray-200'}>
                    <h3 className={'text-4xl underline'}>1</h3>
                    <Image
                        src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg"
                        alt=""/>
                </div>
                <div className={'w-fll h-[200px] p-3 bg-gray-200'}>
                    <h3 className={'text-4xl underline'}>1</h3>
                </div>
                <div className={'w-fll h-[200px] p-3 bg-gray-200'}>
                    <h3 className={'text-4xl underline'}>1</h3>
                </div>
                <div className={'w-fll h-[200px] p-3 bg-gray-200'}>
                    <h3 className={'text-4xl underline'}>1</h3>
                </div>
            </Carousel>
        </>
    );
}

export default App;