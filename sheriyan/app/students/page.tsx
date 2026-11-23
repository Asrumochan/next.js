import FilteredList from "@/components/filteredList";
import axios from "axios";

const Students = async () => {
  const response = await axios.get("https://dummyjson.com/users");
  console.log(response.data.users);

  return <FilteredList users={response.data.users} />;
};

export default Students;
