import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';



const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price is going to be equal to $ or $$ or $$$
    return results.filter(result => {
      return result.price === price;
    })
  };
  

  return (
    <>
      <SearchBar 
      term={term} onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} catTitle="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} catTitle="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} catTitle="Big Spendor" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;