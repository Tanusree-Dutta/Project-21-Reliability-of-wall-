function is_touching(){
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 )
    {
   return true;
  }
  else{
    return false;
  }
  }