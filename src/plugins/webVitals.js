import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';
import axios from 'axios';
import { clientId } from '@/app.config';
import router from '@/router'; 

function sendToAnalytics(metric) {
  const currentRoute = router.currentRoute.value; 
  const enhancedMetric = {
    ...metric,
    route: currentRoute.fullPath, 
  };
  const body = JSON.stringify(enhancedMetric);
  try {
    const response = axios.post(`${clientId}/push-frontend-metric`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}

export default {
  install: () => {
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }
};
