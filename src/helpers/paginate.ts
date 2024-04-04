function paginate<T>(array: T[], pageSize: number) {
    const totalPages = Math.ceil(array.length / pageSize);
    const paginatedData = Array.from({ length: totalPages }, (_, index) =>
        array.slice(index * pageSize, (index + 1) * pageSize)
    );
    return { totalPages, data: paginatedData };
}
export default paginate;
