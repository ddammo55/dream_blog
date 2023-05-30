type Props = {
    categories : string[];
    selected : string;
    onClick : (category: string) => void;
}

export default function Categories({categories, selected, onClick} : Props) {
    return <section className="text-center p-4 mb-2">
        <h2 className="text-lg font-bold border-b border-sky-500">Category</h2>
        <ul>
            {categories.map((category) => (
                <li 
                className={`hover:cursor-pointer hover:text-blue-500 ${category === selected ? 'text-blue-600' : ''}`}
                key={category} onClick={() => onClick(category)} >{category}</li>
                ))}
        </ul>
    </section>
}

