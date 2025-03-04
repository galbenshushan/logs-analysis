export const fetchLogs = async (alertId: string) => {
    const response = await fetch(
      'https://njwinkshi5hyldkqq4srpuoxrm0weqer.lambda-url.us-east-1.on.aws',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ alert_id: alertId }),
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch logs');
    }
  
    const data = await response.json();
    return data.cloudtrail_logs;
  };
  