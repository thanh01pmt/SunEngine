﻿using System.Collections.Immutable;
using SunEngine.Commons.Models.UserGroups;
using SunEngine.Commons.StoreModels;

namespace SunEngine.Stores
{
    public interface IUserGroupStore : IMemoryStore<UserGroupDB>, IMemoryStore
    {
        IImmutableList<OperationKey> AllOperationKeys { get; }
        UserGroup GetUserGroup(string name);
        IImmutableDictionary<string, UserGroup> AllGroups { get; }
    }
}
