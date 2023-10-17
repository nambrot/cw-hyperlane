/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, OwnableMsg, Uint128, RemoteGasDataConfig, QueryMsg, OwnableQueryMsg, IgpGasOracleQueryMsg, GetExchangeRateAndGasPriceResponse, Addr, OwnerResponse, PendingOwnerResponse } from "./IgpOracle.types";
export interface IgpOracleReadOnlyInterface {
  contractAddress: string;
  ownable: (ownableQueryMsg: OwnableQueryMsg) => Promise<OwnableResponse>;
  oracle: (igpGasOracleQueryMsg: IgpGasOracleQueryMsg) => Promise<OracleResponse>;
}
export class IgpOracleQueryClient implements IgpOracleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.ownable = this.ownable.bind(this);
    this.oracle = this.oracle.bind(this);
  }

  ownable = async (ownableQueryMsg: OwnableQueryMsg): Promise<OwnableResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      ownable: ownableQueryMsg
    });
  };
  oracle = async (igpGasOracleQueryMsg: IgpGasOracleQueryMsg): Promise<OracleResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      oracle: igpGasOracleQueryMsg
    });
  };
}
export interface IgpOracleInterface extends IgpOracleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  ownership: (ownableMsg: OwnableMsg, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setRemoteGasDataConfigs: ({
    configs
  }: {
    configs: RemoteGasDataConfig[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  setRemoteGasData: ({
    config
  }: {
    config: RemoteGasDataConfig;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class IgpOracleClient extends IgpOracleQueryClient implements IgpOracleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.ownership = this.ownership.bind(this);
    this.setRemoteGasDataConfigs = this.setRemoteGasDataConfigs.bind(this);
    this.setRemoteGasData = this.setRemoteGasData.bind(this);
  }

  ownership = async (ownableMsg: OwnableMsg, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      ownership: ownableMsg
    }, fee, memo, _funds);
  };
  setRemoteGasDataConfigs = async ({
    configs
  }: {
    configs: RemoteGasDataConfig[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_remote_gas_data_configs: {
        configs
      }
    }, fee, memo, _funds);
  };
  setRemoteGasData = async ({
    config
  }: {
    config: RemoteGasDataConfig;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_remote_gas_data: {
        config
      }
    }, fee, memo, _funds);
  };
}