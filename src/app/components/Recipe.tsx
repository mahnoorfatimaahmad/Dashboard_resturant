const RecipeManagement = () => {
    return (
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Recipe Management</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Recipe List</h3>
          <ul className="list-disc pl-6">
            <li>Spaghetti Carbonara</li>
            <li>Grilled Chicken Caesar Salad</li>
            <li>Vegetable Stir Fry</li>
            <li>Chocolate Lava Cake</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Add New Recipe</h3>
          <form className="mt-2">
            <input
              type="text"
              placeholder="Recipe Name"
              className="p-2 border rounded-md w-full mb-4"
            />
            <textarea
              placeholder="Recipe Instructions"
              className="p-2 border rounded-md w-full mb-4"
              rows={4}
            />
            <input
              type="text"
              placeholder="Ingredients (comma separated)"
              className="p-2 border rounded-md w-full mb-4"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 w-full"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default RecipeManagement;
  