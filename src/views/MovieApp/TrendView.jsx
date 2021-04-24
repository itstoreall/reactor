import { useState, useEffect } from 'react';
import TrendList from '../../components/MovieComponents/TrendList';
import api from '../../api/movieAPI';

const TrendView = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => api.getTrends().then(trends => setTrends(trends)), []);

  return <TrendList trends={trends} />;
};

export default TrendView;
