import { z } from "zod";
import { fetchSearchItems } from "@/actions/fetch-search-items";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const querySchema = z.string();

const HomePage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const query = querySchema.parse(searchParams);
  const items = await fetchSearchItems(query);
  return <div>HomePage</div>;
};

export default HomePage;
