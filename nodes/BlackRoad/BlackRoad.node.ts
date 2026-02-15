import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class BlackRoad implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'BlackRoad',
    name: 'blackroad',
    icon: 'file:blackroad.svg',
    group: ['transform'],
    version: 1,
    description: 'BlackRoad OS integration',
    defaults: { name: 'BlackRoad' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        options: [
          { name: 'Get Status', value: 'status' },
          { name: 'List Agents', value: 'agents' },
          { name: 'Deploy', value: 'deploy' }
        ],
        default: 'status'
      }
    ]
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    return [this.helpers.returnJsonArray({ status: 'online', agents: 30000 })];
  }
}
