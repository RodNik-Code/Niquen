var a;
function open_close()
{
    if(a==0)
    {
        document.getElementById("infor").style.display="inline";
        document.getElementById("edot").style.display="none";
        return a=1;
    }
    else
    {
        document.getElementById("edot").style.display="inline";
        document.getElementById("infor").style.display="none";
        return a=0;
    }
}
function close_open()
{
    if(a==0)
    {
        document.getElementById("infor").style.display="inline";
        document.getElementById("edot").style.display="none";
        return a=1;
    }
    else
    {
        document.getElementById("edot").style.display="inline";
        document.getElementById("infor").style.display="none";
        return a=0;
    }
}