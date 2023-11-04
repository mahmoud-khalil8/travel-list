export default  function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>
                    Start adding to your packing list
                </em>
            </footer>
        );
    }
    const itemsNum = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems / itemsNum) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You have packed everything ✈"
                    : `You have ${itemsNum} items on your list ,and you  already packed ${packedItems} (${percentage}%)`}

            </em>
        </footer>
    );
}
