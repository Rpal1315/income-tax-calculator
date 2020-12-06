function calculate() 
{
    income = document.getElementById("text1").value 
    income = Number(income)
    
    var tax
    if (income <= 250000) 
    {
         tax = 0  
            
    }
    else if (income > 250000 & income <= 500000) 
    {
       tax = (5 / 100) * income
        
    }
    else if (income > 500000 & income <= 750000) 
    {
        tax = (10 / 100) * income
         
    }
    else if (income > 750000 & income <= 1000000) 
    {
        tax = (15 / 100) * income
             
    }
    else if (income > 1000000 & income <= 1250000)
    {
        tax = (20 / 100) * income
        
    }
    else if (income > 1250000 & income <= 1500000) 
    {
       tax = (25 / 100) * income
         
    }
    else if (income > 1500000) 
    {
       tax = (30 / 100) * income
        
    }
    document.getElementById("result").value = tax 
}