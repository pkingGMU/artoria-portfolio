export default function IconButton({ img, alt, id, link }) {
    return (
        <>
            <button
                className="icon_button"
                type="button"
                id={id}
                onClick={() => onClick(link)}
            >
                <img src={img} alt={alt} />
            </button>
        </>
    );
}

function onClick(link) {
    window.open(link);
}
