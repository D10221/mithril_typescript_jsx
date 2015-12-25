export default function requireIt<T>(what: string){
    return <T>require(what);
}
