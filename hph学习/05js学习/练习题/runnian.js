  function runnian(year)
  {
	  if (year % 4 == 0 && year % 100 == 0 || year % 400 ==0)
	  {
		  window.alert(true);
	  }else
			{
				window.alert(false);
			}
  }