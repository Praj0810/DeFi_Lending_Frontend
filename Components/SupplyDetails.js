import React, { useEffect } from 'react';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { EINRTokenAbi, EINRTokenAddress, EGoldTokenAbi, EGoldTokenAddress, LPTokenAbi, LPTokenAddress, LendingPoolAbi,
    LendingPoolAddress} from '../StructuredAbi';
import { useState } from 'react';
import {ethers}  from 'ethers';

const SupplyDetails = () => {
    
    const { account , isWeb3Enabled} = useMoralis();
    const [EINRBalance, setEINRBalance]= useState("0"); 
    const [EINRDeposited, setEINRDeposited]= useState("0"); 
    const [EINRwithInterest, setEINRWithInterest]= useState("0"); 

    const {runContractFunction : getEINRBalance} = useWeb3Contract({
        abi: EINRTokenAbi,
        contractAddress: EINRTokenAddress,
        functionName : "balanceOf",
        params:{
            account : account,
        }
    })
    const {runContractFunction : getEINRDeposited} = useWeb3Contract({
        abi: LendingPoolAbi,
        contractAddress: LendingPoolAddress,
        functionName : "balanceOfEINR",
        params:{
            account : account,
        
        }    
    })
    const {runContractFunction : getEarnEINRInterest} = useWeb3Contract({
        abi: LendingPoolAbi,
        contractAddress: LendingPoolAddress,
        functionName : "getAmountWithInterest",
        params:{
            account : account,
        }    
    })
    

    useEffect(() =>{
        if(account){
            updateUIValues()
        } else {
        setEINRBalance(0); 
        }

    },[account, isWeb3Enabled])

    async function updateUIValues(){
        const EINRBalanceFromContract = (await getEINRBalance({onError: (error) => console.log(error)})).toString()  
        const formattedEINRBalance = ethers.formatUnits(EINRBalanceFromContract);
        console.log(formattedEINRBalance);
        setEINRBalance(formattedEINRBalance); 

        const EINRDepositBalanceFromContract = (await getEINRDeposited({onError: (error) => console.log(error)})).toString()
        const formattedEINRDepositBalance = ethers.formatUnits(EINRDepositBalanceFromContract);
        console.log(formattedEINRDepositBalance);
        setEINRDeposited(formattedEINRDepositBalance); 

        const EINREarnWithInterest = (await getEarnEINRInterest({onError: (error) => console.log(error)})).toString()  
        const formattedEINREarnWithInterest = ethers.formatUnits(EINREarnWithInterest);
        console.log(formattedEINREarnWithInterest);
        setEINRWithInterest(formattedEINREarnWithInterest); 
    }
    
    return (

    <div>
        <div>EINR Token Balance is : {EINRBalance}</div>
        <div>EINR Deposited Balance is : {EINRDeposited}</div>
        <div>EINR Token earn with Interest of 8% pa : {EINRwithInterest}</div>
    </div>
  )
}

export default SupplyDetails