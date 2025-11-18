export default function AddDiscoveryButton() {

    const handleAddClick = () => {
        console.log("Open 'Add Fossil' modal");
    };

    return (
        <button className="add-discovery-btn" onClick={handleAddClick}>
            +
        </button>
    );
}