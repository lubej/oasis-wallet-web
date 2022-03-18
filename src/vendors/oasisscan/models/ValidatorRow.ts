/* tslint:disable */
/* eslint-disable */
/**
 * Oasisscan API
 * https://github.com/bitcat365/oasisscan-backend#readme
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ValidatorRow
 */
export interface ValidatorRow {
    /**
     * If "true", entity is part of validator set (top <scheduler.params.max_validators> by stake).
     * @type {boolean}
     * @memberof ValidatorRow
     */
    active: boolean;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    balance: string;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    bound: object | null;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    bounds: object | null;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    commission: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    delegators: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    description: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    email: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    entity_address: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    entity_id: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    escrow: string;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    escrow_amount_status: object | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    escrow_change24: string;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    escrow_percent: number;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    escrow_shares_status: object | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    icon: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    keybase: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    node_address: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    node_id: string;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    nodes: object | null;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    nonce: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    proposals: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    rank: number;
    /**
     * 
     * @type {object}
     * @memberof ValidatorRow
     */
    rates: object | null;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorRow
     */
    signs: number;
    /**
     * If "true", an entity has a node that is registered for being a validator, node is up to date, and has successfully registered itself. However, it may or may not be part of validator set (top <scheduler.params.max_validators> by stake).
     * @type {boolean}
     * @memberof ValidatorRow
     */
    status: boolean;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    total_shares: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    twitter: string | null;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    uptime: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorRow
     */
    website: string | null;
}

export function ValidatorRowFromJSON(json: any): ValidatorRow {
    return ValidatorRowFromJSONTyped(json, false);
}

export function ValidatorRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': json['active'],
        'balance': json['balance'],
        'bound': json['bound'],
        'bounds': json['bounds'],
        'commission': json['commission'],
        'delegators': json['delegators'],
        'description': json['description'],
        'email': json['email'],
        'entity_address': json['entityAddress'],
        'entity_id': json['entityId'],
        'escrow': json['escrow'],
        'escrow_amount_status': json['escrowAmountStatus'],
        'escrow_change24': json['escrowChange24'],
        'escrow_percent': json['escrowPercent'],
        'escrow_shares_status': json['escrowSharesStatus'],
        'icon': json['icon'],
        'keybase': json['keybase'],
        'name': json['name'],
        'node_address': json['nodeAddress'],
        'node_id': json['nodeId'],
        'nodes': json['nodes'],
        'nonce': json['nonce'],
        'proposals': json['proposals'],
        'rank': json['rank'],
        'rates': json['rates'],
        'score': json['score'],
        'signs': json['signs'],
        'status': json['status'],
        'total_shares': json['totalShares'],
        'twitter': json['twitter'],
        'uptime': json['uptime'],
        'website': json['website'],
    };
}

export function ValidatorRowToJSON(value?: ValidatorRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'balance': value.balance,
        'bound': value.bound,
        'bounds': value.bounds,
        'commission': value.commission,
        'delegators': value.delegators,
        'description': value.description,
        'email': value.email,
        'entityAddress': value.entity_address,
        'entityId': value.entity_id,
        'escrow': value.escrow,
        'escrowAmountStatus': value.escrow_amount_status,
        'escrowChange24': value.escrow_change24,
        'escrowPercent': value.escrow_percent,
        'escrowSharesStatus': value.escrow_shares_status,
        'icon': value.icon,
        'keybase': value.keybase,
        'name': value.name,
        'nodeAddress': value.node_address,
        'nodeId': value.node_id,
        'nodes': value.nodes,
        'nonce': value.nonce,
        'proposals': value.proposals,
        'rank': value.rank,
        'rates': value.rates,
        'score': value.score,
        'signs': value.signs,
        'status': value.status,
        'totalShares': value.total_shares,
        'twitter': value.twitter,
        'uptime': value.uptime,
        'website': value.website,
    };
}


