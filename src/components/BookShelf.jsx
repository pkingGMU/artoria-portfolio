import Book from "./Book.jsx";
import Popup from "./Popup.jsx";
import { useRef, useEffect, useState } from "react";
function BookShelf({ project_data }) {
    const [active_book, set_active_book] = useState(null);
    const project_data_1 = {
        NIH_ACTIVITY: {
            project_name: "3-Axis Accelerometer Activity Classification",
            description: "Test Description",
        },
        AVRO_READER: {
            project_name: ".AVRO Reader for Empatica Embrace Plus",
            description: "Test Description",
        },
    };
    const books = [];

    for (let i = 0; i < Object.keys(project_data).length; i++) {
        books.push(
            <Book
                project_name={Object.keys(project_data)[i]}
                onClick={() => set_active_book(Object.keys(project_data)[i])}
            />,
        );
    }

    console.log(books[0]);

    return (
        <>
            <ul>
                {books.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {active_book && (
                <Popup
                    {...project_data[active_book]}
                    onClose={() => set_active_book(null)}
                />
            )}
        </>
    );
}

export default BookShelf;
