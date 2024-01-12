import { AccessGroupsTableCol } from '../_components/tables/access-groups-table/access-groups-table.constants';
import { AgentBinariesTableCol } from '../_components/tables/agent-binaries-table/agent-binaries-table.constants';
import { AgentsStatusTableCol } from '../_components/tables/agents-status-table/agents-status-table.constants';
import { AgentsTableCol } from '../_components/tables/agents-table/agents-table.constants';
import { ChunksTableCol } from '../_components/tables/chunks-table/chunks-table.constants';
import { CrackersTableCol } from '../_components/tables/crackers-table/crackers-table.constants';
import { CracksTableCol } from '../_components/tables/cracks-table/cracks-table.constants';
import { FilesTableCol } from '../_components/tables/files-table/files-table.constants';
import { HashlistsTableCol } from '../_components/tables/hashlists-table/hashlists-table.constants';
import { HashtypesTableCol } from '../_components/tables/hashtypes-table/hashtypes-table.constants';
import { HealthChecksTableCol } from '../_components/tables/health-checks-table/health-checks-table.constants';
import { LogsTableCol } from '../_components/tables/logs-table/logs-table.constants';
import { NotificationsTableCol } from '../_components/tables/notifications-table/notifications-table.constants';
import { PermissionsTableCol } from '../_components/tables/permissions-table/permissions-table.constants';
import { PreprocessorsTableCol } from '../_components/tables/preprocessors-table/preprocessors-table.constants';
import { PretasksTableCol } from '../_components/tables/pretasks-table/pretasks-table.constants';
import { SuperHashlistsTableCol } from '../_components/tables/super-hashlists-table/super-hashlists-table.constants';
import { SupertasksPretasksTableCol } from '../_components/tables/supertasks-pretasks-table/supertasks-pretasks-table.constants';
import { SupertasksTableCol } from '../_components/tables/supertasks-table/supertasks-table.constants';
import { TaskTableCol } from '../_components/tables/tasks-table/tasks-table.constants';
import { UsersTableCol } from '../_components/tables/users-table/users-table.constants';

export type Layout = 'full' | 'fixed';
export type Theme = 'light' | 'dark';

export interface TableSettings {
  [key: string]: number[];
}

export interface UIConfig {
  layout: Layout;
  theme: Theme;
  tableSettings: TableSettings;
  timefmt: string;
  refreshPage: boolean;
  refreshInterval: number;
}

export const uiConfigDefault: UIConfig = {
  layout: 'fixed',
  theme: 'light',
  timefmt: 'dd/MM/yyyy h:mm:ss',
  tableSettings: {
    notificationsTable: [
      NotificationsTableCol.ID,
      NotificationsTableCol.STATUS,
      NotificationsTableCol.APPLIED_TO,
      NotificationsTableCol.ACTION,
      NotificationsTableCol.NOTIFICATION,
      NotificationsTableCol.RECEIVER
    ],
    permissionsTable: [
      PermissionsTableCol.ID,
      PermissionsTableCol.NAME,
      PermissionsTableCol.MEMBERS
    ],
    cracksTable: [
      CracksTableCol.FOUND,
      CracksTableCol.PLAINTEXT,
      CracksTableCol.HASH,
      CracksTableCol.AGENT,
      CracksTableCol.TASK,
      CracksTableCol.CHUNK,
      CracksTableCol.TYPE
    ],
    agentsTable: [
      AgentsTableCol.ID,
      AgentsTableCol.NAME,
      AgentsTableCol.STATUS,
      AgentsTableCol.CURRENT_TASK,
      AgentsTableCol.CLIENT,
      AgentsTableCol.GPUS_CPUS,
      AgentsTableCol.LAST_ACTIVITY
    ],
    agentStatusTable: [
      AgentsStatusTableCol.ID,
      AgentsStatusTableCol.STATUS,
      AgentsStatusTableCol.NAME,
      AgentsStatusTableCol.AGENT_STATUS,
      AgentsStatusTableCol.WORKING_ON,
      AgentsStatusTableCol.ASSIGNED,
      AgentsStatusTableCol.LAST_ACTIVITY
    ],
    assignedAgentsTable: [
      AgentsTableCol.ID,
      AgentsTableCol.NAME,
      AgentsTableCol.STATUS,
      AgentsTableCol.TASK_SPEED,
      AgentsTableCol.LAST_ACTIVITY,
      AgentsTableCol.TIME_SPENT,
      AgentsTableCol.BENCHMARK,
      AgentsTableCol.CRACKED,
      AgentsTableCol.SEARCHED
    ],
    chunksTable: [
      ChunksTableCol.ID,
      ChunksTableCol.PROGRESS,
      ChunksTableCol.TASK,
      ChunksTableCol.AGENT,
      ChunksTableCol.DISPATCH_TIME,
      ChunksTableCol.LAST_ACTIVITY,
      ChunksTableCol.TIME_SPENT,
      ChunksTableCol.STATE,
      ChunksTableCol.CRACKED
    ],
    hashlistsTable: [
      HashlistsTableCol.ID,
      HashlistsTableCol.NAME,
      HashlistsTableCol.HASHTYPE,
      HashlistsTableCol.FORMAT,
      HashlistsTableCol.CRACKED,
      HashlistsTableCol.HASH_COUNT
    ],
    superHashlistsTable: [
      SuperHashlistsTableCol.ID,
      SuperHashlistsTableCol.NAME,
      SuperHashlistsTableCol.HASHTYPE,
      SuperHashlistsTableCol.CRACKED,
      SuperHashlistsTableCol.HASHLISTS
    ],
    hashtypesTable: [
      HashtypesTableCol.HASHTYPE,
      HashtypesTableCol.DESCRIPTION,
      HashtypesTableCol.SALTED,
      HashtypesTableCol.SLOW_HASH
    ],
    filesTable: [
      FilesTableCol.ID,
      FilesTableCol.NAME,
      FilesTableCol.SIZE,
      FilesTableCol.LINE_COUNT,
      FilesTableCol.ACCESS_GROUP
    ],
    crackersTable: [
      CrackersTableCol.ID,
      CrackersTableCol.NAME,
      CrackersTableCol.VERSIONS
    ],
    preprocessorsTable: [PreprocessorsTableCol.ID, PreprocessorsTableCol.NAME],
    agentBinariesTable: [
      AgentBinariesTableCol.ID,
      AgentBinariesTableCol.FILENAME,
      AgentBinariesTableCol.OS,
      AgentBinariesTableCol.TYPE,
      AgentBinariesTableCol.UPDATE_TRACK,
      AgentBinariesTableCol.VERSION
    ],
    healthChecksTable: [
      HealthChecksTableCol.ID,
      HealthChecksTableCol.CREATED,
      HealthChecksTableCol.STATUS,
      HealthChecksTableCol.TYPE
    ],
    pretasksTable: [
      PretasksTableCol.ID,
      PretasksTableCol.NAME,
      PretasksTableCol.ATTACK_COMMAND,
      PretasksTableCol.FILES_TOTAL,
      PretasksTableCol.FILES_SIZE,
      PretasksTableCol.PRIORITY,
      PretasksTableCol.MAX_AGENTS
    ],
    tasksTable: [
      TaskTableCol.ID,
      TaskTableCol.NAME,
      TaskTableCol.STATUS,
      TaskTableCol.HASHLISTS,
      TaskTableCol.PRIORITY,
      TaskTableCol.AGENTS,
      TaskTableCol.MAX_AGENTS,
      TaskTableCol.DISPATCHED_SEARCHED,
      TaskTableCol.CRACKED
    ],
    supertasksTable: [
      SupertasksTableCol.ID,
      SupertasksTableCol.NAME,
      SupertasksTableCol.PRETASKS
    ],
    supertasksPretasksTable: [
      SupertasksPretasksTableCol.ID,
      SupertasksPretasksTableCol.NAME,
      SupertasksPretasksTableCol.PRIORITY,
      SupertasksPretasksTableCol.MAX_AGENTS
    ],
    hashlistTasksTable: [
      TaskTableCol.ID,
      TaskTableCol.NAME,
      TaskTableCol.DISPATCHED_SEARCHED,
      TaskTableCol.CRACKED
    ],
    usersTable: [
      UsersTableCol.ID,
      UsersTableCol.NAME,
      UsersTableCol.REGISTERED,
      UsersTableCol.LAST_LOGIN,
      UsersTableCol.EMAIL,
      UsersTableCol.STATUS,
      UsersTableCol.SESSION,
      UsersTableCol.PERM_GROUP
    ],
    logsTable: [
      LogsTableCol.ID,
      LogsTableCol.ISSUER,
      LogsTableCol.LEVEL,
      LogsTableCol.MESSAGE,
      LogsTableCol.TIME
    ],
    accessGroupsTable: [AccessGroupsTableCol.ID, AccessGroupsTableCol.NAME]
  },
  refreshPage: false,
  refreshInterval: 10
};
