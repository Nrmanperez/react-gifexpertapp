import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Cards } from "./Cards";

export const GifComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState("");
  const [getValues, setGetValues] = useState([]);

  useEffect(() => {
    const getGifs = async () => {
      const url = `${import.meta.env.VITE_API_URL}/search?q=${categories}&limit=15&api_key=tgHiCGWufE9B0sRhQHjEPHmKkb7vxYyn`;
      const response = await fetch(url);
      const { data } = await response.json();
      setGetValues(data);
    };
    getGifs();
  }, [categories]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategories(inputValue);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <Flex
            gap="4"
            direction={{ base: "column", md: "row" }}
            minWidth="max-content"
            alignItems="center"
            marginTop="20px"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
              />
              <Input
                placeholder="Search your Gifs"
                value={inputValue}
                type="text"
                onChange={handleInputChange}
                borderRadius="2xl"
                borderColor="black"
              />
            </InputGroup>
          </Flex>
        </form>
      </Container>
      <HStack w="100vw" p={4} mt={4} color="black">
        <Flex wrap="wrap" justifyContent="space-evenly">
          {getValues.map((getValue) => (
            <Cards
              key={getValue.id}
              title={getValue.title}
              image={getValue.images?.downsized_medium.url}
            />
          ))}
        </Flex>
      </HStack>
    </>
  );
};
