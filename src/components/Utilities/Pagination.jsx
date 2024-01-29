const Pagination = ({ page, lastPage }) => {
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            <button className="transition-all hover:text-color-accent">Prev</button>
            <p>{page} of {lastPage}</p>
            <button className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}
export default Pagination