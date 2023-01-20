
export default function  pages(totalCount, limits) {
    return Math.ceil(totalCount / limits);
}