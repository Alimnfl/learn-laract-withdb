import { Link, Head } from "@inertiajs/react";
import React from "react";

export default function Homepage(props) {
    // console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-600">
            <Head title={props.title} />
            <div>
                <p className="text-white">{props.description}</p>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 m-2 bg-white text-black rounded-lg shadow-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p>{data.description}</p>
                                <p className="text-sm">{data.category}</p>
                                <p className="text-sm">{data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada berita saat ini.</p>
                )}
            </div>
        </div>
    );
}
