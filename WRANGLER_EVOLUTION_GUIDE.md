# Wrangler Evolution: Why Old Projects Break

## The Problem: "It worked before, now it doesn't"

### Why Old Cloudflare Pages Projects Stop Working

#### 1. **Wrangler Version Updates (Breaking Changes)**
- **Wrangler 3.x → 4.x**: Major breaking changes in configuration syntax
- **Configuration format changes**: JSON → TOML → JSONC support
- **Command changes**: `wrangler deploy` → `wrangler pages deploy`

#### 2. **Cloudflare Pages Platform Evolution**
- **Build requirements**: More strict validation
- **Environment handling**: Changes in how variables are processed
- **Output directory**: Explicit `pages_build_output_dir` requirement

#### 3. **Common Configuration Issues**

**Old Format (broken in newer Wrangler):**
```json
{
  "name": "my-project",
  "build": {
    "command": "npm run build"
  }
}
```

**New Format (current):**
```toml
name = "my-project"
pages_build_output_dir = "dist"

[vars]
VITE_API_KEY = "value"
```

#### 4. **Environment Variable Handling Changes**

**Old Way (problematic):**
```toml
[env.production.vars]
API_KEY = "value"

[env.staging.vars] 
API_KEY = "staging-value"

[vars]
# This creates conflicts!
```

**New Way (recommended):**
```toml
[vars]
API_KEY = "value"

# Only specify production-specific vars when needed
# [env.production.vars]
# BASE_URL = "https://mydomain.com"
```

### How to Fix Legacy Projects

#### Step 1: Check Wrangler Version
```bash
wrangler --version
```

#### Step 2: Update Configuration
```bash
# Convert to modern TOML format
# Remove duplicate environment sections
# Add pages_build_output_dir
```

#### Step 3: Test Build Process
```bash
npm run build  # Must work locally first
```

#### Step 4: Deploy with Correct Commands
```bash
# Old way (broken)
wrangler deploy

# New way (correct)
wrangler pages deploy dist
```

### Best Practices for Future Projects

#### 1. **Keep Configuration Simple**
```toml
name = "project-name"
compatibility_date = "2025-12-31"
pages_build_output_dir = "dist"

[vars]
# Only essential variables here
```

#### 2. **Use Version Control**
- Pin Wrangler version in CI/CD
- Document configuration changes
- Test upgrades in staging first

#### 3. **Environment Separation**
```toml
# Production variables
[env.production.vars]
BASE_URL = "https://prod.example.com"

# Preview/Staging variables  
[env.preview.vars]
BASE_URL = "https://staging.example.com"
```

### Migration Checklist

- [ ] Check Wrangler version compatibility
- [ ] Convert to TOML format if needed
- [ ] Remove duplicate environment sections
- [ ] Add `pages_build_output_dir = "dist"`
- [ ] Simplify environment variables
- [ ] Test build locally
- [ ] Use correct deployment commands
- [ ] Verify deployment in Cloudflare Dashboard

### Why Projects Work Initially Then Break

1. **Gradual Changes**: Cloudflare/Wrangler updates roll out gradually
2. **Configuration Drift**: Projects evolve without updating config
3. **Implicit vs Explicit**: Old versions were more forgiving
4. **Cache Issues**: Stale configurations cached in various places

### Staying Updated

- Monitor [Wrangler releases](https://github.com/cloudflare/wrangler/releases)
- Follow [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- Test updates on non-production projects first
- Keep local development environment updated

---

**Key Takeaway**: The issue wasn't your code - it was the evolving platform requirements. Always keep your Wrangler configuration updated to match the latest standards!
